using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Webmp4.Helpers
{
    public static class GenericHelpers
    {
        public static string GenerateId()
        {
            var g = Guid.NewGuid().ToString("N");
            return g;
        }
    }
}
