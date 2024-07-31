import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="shadow-lg rounded-lg mb-4 transition-all duration-300 ease-in-out transform hover:scale-105 bg-white">
      <button
        className="flex justify-between items-center w-full text-left text-lg font-medium text-gray-700 p-4 rounded-t-lg focus:outline-none transition duration-300 ease-in-out"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
      </button>
      {isOpen && (
        <div className="p-4 bg-white rounded-b-lg">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

const Accordion = () => {
  const faqs = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "What is Tailwind CSS?",
      answer:
        "Tailwind CSS is a utility-first CSS framework for rapid UI development.",
    },
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "What is Tailwind CSS?",
      answer:
        "Tailwind CSS is a utility-first CSS framework for rapid UI development.",
    },
    // Add more FAQs here
  ];

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-gray-100 shadow-2xl rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">
        Frequently Asked Questions
      </h2>
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </div>
  );
};

export default Accordion;
