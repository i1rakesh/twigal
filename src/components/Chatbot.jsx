import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import { useNavigate } from "react-router";
import RightBar from "././RightBar";
import "../assests/index.css";
import Navbar2 from "././Navbar2";
import Sidebar from "././Sidebar";
function Chatbot() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const openAi = new OpenAIApi(
    new Configuration({
      apiKey: process.env.REACT_APP_IDENTITY,
    })
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await openAi.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: input }],
    });
    setOutput(response.data.choices[0].message.content);
    setInput("");
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <div className="m-0 p-0 h-screen w-screen">
      <Navbar2 />
      <div className="w-screen flex h-5/6 z-[1] ">
        <Sidebar onClick={handleNavigate} />
        <div className=" mt-[1rem] flex w-[65vw] rounded-[1.5rem] bg-gray-50/50 shadow-lg p-4">
          <form onSubmit={handleSubmit}>
            <h1 className="text-[2rem] text-center">
              Answer for Every Question
            </h1>
            <p className=" shadow-xl font-mono whitespace-pre-wrap pt-4 text-center text-[1.5rem] rounded-2xl w-[62vw] h-[60vh] bg-gray-400/30 text-xl overflow-y-scroll p-[2rem] ">
              Result: {output}
            </p>

            <input
              className=" rounded-xl p-4 min-w-[50vw]"
              placeholder="Enter you query"
              type="text"
              value={input}
              onChange={handleInputChange}
            />
            <button
              className=" mx-2 w-24 p-2 font-bold bg-violet-600 rounded-xl text-white hover:bg-white hover:text-violet-600 "
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
        <RightBar />
      </div>
    </div>
  );
}

export default Chatbot;
