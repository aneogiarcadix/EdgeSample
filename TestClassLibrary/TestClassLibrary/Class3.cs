using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Data;
namespace TestClassLibrary
{
    class Class3
    {
        public async Task<object> TestMethod(object input)
        {
            //using Dapper realted code
            Dapper.CommandDefinition commandDefinition = new Dapper.CommandDefinition();
            SqlDbType types = new SqlDbType();

            return Class2.TestMethod(input);
        }
    }
}
