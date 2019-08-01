pragma solidity ^0.5.7;

library math {
    function addInt (int a, int b) public pure returns (int c)
    {
        return a+b;
    }
}

contract A{
    function test(int a, int b) public returns(int)
    {
        return math.addInt(a,b);
    }
}