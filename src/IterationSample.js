const IterationSample = () => {
  const names = ["눈사람", "얼음", "눈", "바람"];
  const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  // 배열의 index값을 key값으로 설정할 때 배열이 변경되면 렌더링을 하지 못하는 경우가 발생
  // 배열의 index값을 key값으로 하는 것은 바람직하지 않다.
  return <ul>{nameList}</ul>;
};
export default IterationSample;
