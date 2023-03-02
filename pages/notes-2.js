import toast, { Toaster } from "react-hot-toast";

const notify = () =>
  toast("Good Job!", {
    icon: "👏",
  });
  
const NotePage2 = () => {
  return (
    <>
      <h3>Second page in notepad</h3>
      <button className="btn btn-primary" onClick={notify}>
        button
      </button>
      <Toaster />
    </>
  );
};

export default NotePage2;
