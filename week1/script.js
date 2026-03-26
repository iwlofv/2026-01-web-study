document.addEventListener('DOMContentLoaded', () => {
  const calculateBtn = document.getElementById('calculateBtn');
  const startDateInput = document.getElementById('startDate');
  const resultText = document.getElementById('resultText');
  const dischargeDateText = document.getElementById('dischargeDateText');
  const percentText = document.getElementById('percentText');
  const waterLevel = document.getElementById('waterLevel');

  calculateBtn.addEventListener('click', () => {
    if (!startDateInput.value) {
      alert('입대일을 선택해주세요.');
      return;
    }

    const startDate = new Date(startDateInput.value);
    const checkedMilitary = document.querySelector('input[name="militaryType"]:checked');
    const monthsToServe = parseInt(checkedMilitary.value, 10);

    // 전역일 자동 계산: 입대일에 복무 개월 수를 더하고 1일을 뺌
    const endDate = new Date(startDate);
    endDate.setMonth(endDate.getMonth() + monthsToServe);
    endDate.setDate(endDate.getDate() - 1);

    const today = new Date();

    // 정확한 날짜 계산을 위해 시간을 00:00:00으로 통일
    today.setHours(0, 0, 0, 0);
    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(0, 0, 0, 0);

    // 전역일 포맷팅
    const endYear = endDate.getFullYear();
    const endMonth = endDate.getMonth() + 1;
    const endDay = endDate.getDate();
    const formattedEndDate = `${endYear}년 ${endMonth}월 ${endDay}일`;

    // 각 날짜 차이를 밀리초 단위에서 '일' 단위로 변환
    const totalDays = (endDate - startDate) / (1000 * 60 * 60 * 24);
    const servedDays = (today - startDate) / (1000 * 60 * 60 * 24);
    const remainingDays = (endDate - today) / (1000 * 60 * 60 * 24);

    // 진행률 계산
    let percentage = (servedDays / totalDays) * 100;

    // 진행률 예외 처리 (입대 전이면 0%, 전역 후면 100%로 고정)
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;

    // 물이 차는 애니메이션을 눈으로 확인할 수 있도록 우선 0%로 초기화
    waterLevel.style.height = '0%';
    percentText.innerText = '0%';
    dischargeDateText.innerText = `전역 예정일: ${formattedEndDate}`;

    // 약간의 지연 후 실제 계산된 퍼센트 적용 (물이 차오르는 애니메이션 발동)
    setTimeout(() => {
      if (remainingDays <= 0) {
        resultText.innerText = `축하합니다! 전역하셨습니다!`;
      } else {
        resultText.innerText = `전역까지 남은 일자: ${remainingDays}일`;
      }
      
      percentText.innerText = `${percentage.toFixed(2)}%`; // 소수점 둘째 자리까지 표기
      waterLevel.style.height = `${percentage}%`; // CSS height 속성을 변경하여 물 채우기
    }, 100);
  });
});
