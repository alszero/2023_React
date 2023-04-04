const IterationSample = () => {
  const names = ["눈사람", "얼음", "눈", "바람"];
  // names 배열변수에 데이터를 저장
  const nameList = names.map((name) => <li>{name}</li>);
  // names 배열에 있는 데이터를 1개씩 순차적으로 출려하는
  // 데이터를 nameList 변수에 저장
  return <ul>{nameList}</ul>;
};
export default IterationSample;
