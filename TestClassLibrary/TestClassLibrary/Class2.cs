using System;
using System.Collections.Generic;
using System.Text;

namespace TestClassLibrary
{
    public static class Class2
    {
        public static object TestMethod(object input)
        {
            return Class1.TestMethod(input);
        }
    }
}
