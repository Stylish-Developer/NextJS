import toast, { Toaster } from "react-hot-toast";

const notify = () =>
  toast("Good Job!", {
    icon: "👏",
  });

const NotePage1 = () => {
  return (
    <>
      <h3>First page in notepad</h3>
      <button className="btn btn-success" onClick={notify}>
        button
      </button>
      <Toaster />
    </>
  );
};

export default NotePage1;
