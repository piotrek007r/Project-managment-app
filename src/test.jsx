const Test = function (props) {
  function handleTest() {
    console.log('clicked')
    props.onSave("test passed");
  }

  return (
    <>
      <button onClick={handleTest}>tghfgh</button>
    </>
  );
};

export default Test;
