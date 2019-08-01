pragma solidity ^0.5.7;

contract BasicConstructor
{
    uint _cnt;
    address _from;
    address _to;
    //생성자에서 상태변수를 초기화
    constructor(uint cnt,address from, address to) public
    {
        _cnt = cnt;
        _from = from;
        _to = to;
        
    }
    function checkCnt() public view returns(uint){
        return _cnt;
    }
}

contract BC_Use
{
    //컨트랙트
BasicConstructor bs = new BasicConstructor(10,address(0x123),address(0x456));
function log() public view returns (uint)
{
    return bs.checkCnt();
}
    
}