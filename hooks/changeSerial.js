function changeSerialCode(serial) {
       // 유효성 검사: 시리얼 번호는 8자리 문자열이어야 함
       if (serial.length !== 8) {
        throw new Error("Serial code must be 8 characters long");
    }

    // 숫자를 알파벳으로 변환하는 함수 (첫 번째 자리만 변환)
    const numberToAlphabet = (num) => {
        const alphabetMap = ['Z', 'Y', 'X', 'W', 'V', 'U', 'T', 'S', 'R', 'Q'];
        return alphabetMap[parseInt(num, 10)];
    };

    // 첫 번째 자리만 변환하고 나머지는 그대로
    const apartment = numberToAlphabet(serial.slice(0, 1));   // 첫 번째 자리 (아파트 번호를 알파벳으로 변환)
    const building = serial.slice(1, 4);                      // 다음 세 자리 (동 번호 그대로)
    const unit = serial.slice(4);                             // 나머지 네 자리 (호수 번호 그대로)

    return {
        apartment: `${apartment}아파트`,
        building: `${building}동`,
        unit: `${unit}호`
    };

}

// 예시 사용
const serialCode = "05185576";
const result = changeSerialCode(serialCode);

console.log(result); 

export default changeSerialCode;
