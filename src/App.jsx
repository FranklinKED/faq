import image from "../public/illustration-woman-online-desktop.svg";
import Faq from "../components/Faq";

const faqs = [
  {
    id: crypto.randomUUID(),
    question: "How many team members can I invite?",
    answer:
      "You can invite up to 2 additional users on the Free plan.There is no limit on team members for the Premium plan",
  },
  {
    id: crypto.randomUUID(),
    question: " What is the maximum file upload size?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    id: crypto.randomUUID(),
    question: "How do I reset or change my password ?",
    answer:
      "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you",
  },
  {
    id: crypto.randomUUID(),
    question: "Can I cancel my subscription any time?",
    answer:
      "Yes! Send us a message and we’ll process your request no questions asked.",
  },
  {
    id: crypto.randomUUID(),
    question: "Do you provide additional tech support? ",
    answer:
      "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
  },
];

function App() {
  return (
    <div className="container">
      <div className="left">
        <img className="img" src={image} alt="faq-image" />
      </div>
      <div className="right">
        <h2 className="heading-title">FAQ</h2>
        <Faq data={faqs} />
      </div>
    </div>
  );
}

export default App;
