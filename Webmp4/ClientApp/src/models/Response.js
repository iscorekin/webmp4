export default class Response {
  constructor(response) {
    if (!response || !response.data) {
      this.error = 'Не пришел ответ от сервера';
    } else {
      this.response = response;
      this.status = response.status;
      this.data = response.data;
      this.dto = this.data.data;

      if (this.status >= 400) {
        if (this.status < 500) this.error = 'Проблема на клиенте';
        else this.error = 'Проблема на сервере';
      } else this.dto = this.data.data;
    }
  }

  hasErrors() {
    if (this.dto && this.dto.errcode && this.dto.errcode !== '0') {
      alert(`Errcode${this.dto.errcode}`);
    }
    return !!this.error;
  }

  tryCatchError() {
    if (!this.hasErrors()) return false;
    throw new Error(this.error);
  }
}
