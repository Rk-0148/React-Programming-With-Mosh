const name = "Rohan Kadam";
function Message(){
  if (name)
    return <h1>Hello {name}!</h1>;
  return <h1>Hello World!</h1>;
}

export default Message;