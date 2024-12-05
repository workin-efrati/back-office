import './EditQa.scss'
import { useApi } from '../../hooks/useApi'
import { useEffect, useRef, useState } from 'react'
import { UploadChat } from '../../components/UploadChat'
import { MdDelete } from "react-icons/md";
import { FaUndoAlt } from "react-icons/fa";
import Calendar from '../../components/Calender';

export default function EditQa() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [deletedMsg, setDeletedMsg] = useState([]);
  const [alert, setAlert] = useState();
  const [expandedQuestion, setExpandedQuestion] = useState(null);
  const [expandedAnswer, setExpandedAnswer] = useState(null);

  const questionRef = useRef(null)
  const answerRef = useRef(null)
  const [editObj, setEditObj] = useState({
    question: '',
    answer: '',
    title: '',
    tags: [],
    messagesId: []
  });

  const fechData = async (fromDate, toDate) => await useApi({ method: 'POST', body: { "from": fromDate, "to": toDate, "limit": 1000 }, url: '/messages' })

  const onDateSelect = (fromDate, toDate) => {
    console.log(fromDate, toDate)
    fechData(fromDate, toDate).then((data) => {
      setQuestions(data.filter(msg => msg.isQuestion))
      setAnswers(data.filter(msg => !msg.isQuestion))
    })
  }


  const displayDate = (date) => {
    date = new Date(date)
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${day}/${month}/${year} ${hours}:${minutes}`
  }

  const expandQuestion = (key) => setExpandedQuestion(expandedQuestion === key ? null : key);
  const expandAnswer = (key) => setExpandedAnswer(expandedAnswer === key ? null : key);

  const handleDragStart = (e, item) => {
    e.dataTransfer.setData('text/plain', item._id);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDrop = (e, field) => {
    e.preventDefault();
    e.stopPropagation();
    const itemId = e.dataTransfer.getData('text/plain');
    if (!itemId) return
    const item = questions.find(i => i._id === itemId) || answers.find(i => i._id === itemId);
    if (!item) return
    setAnswers(prevItems => prevItems.map(i => i === item ? { ...i, inProcess: true } : i));
    setQuestions(prevItems => prevItems.map(i => i === item ? { ...i, inProcess: true } : i));
    setEditObj(prev => ({ ...prev, [field]: prev[field] + item.message, messagesId: [...prev.messagesId, item._id] }));

    console.log(editObj)
  };

  const handleDeledeDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const itemId = e.dataTransfer.getData('text/plain');
    if (!itemId) return
    const item = questions.find(i => i._id === itemId) || answers.find(i => i._id === itemId);
    if (!item) return
    setAnswers(prevItems => prevItems.filter(i => i._id !== itemId));
    setQuestions(prevItems => prevItems.filter(i => i._id !== itemId));
    setDeletedMsg(prev => [...prev, item]);

  }


  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleTitleChange = (e) => setEditObj(prev => ({ ...prev, title: e.target.value }));

  const removeFromProcess = (i) => { }

  const handleSendQa = async () => {

    const updatedObj = { ...editObj, question: questionRef.current.innerText, answer: answerRef.current.innerText, };

    const result = await useApi({ method: 'POST', body: { "qa": updatedObj }, url: '/qa/upload' });

    result && setEditObj({
      question: '',
      answer: '',
      title: '',
      tags: [],
      messagesId: []
    });
  };


  return (
    <div className='home'>
      <h1>עריכת שאלות ותשובות</h1>
      <h2 className='alert'>{alert && alert}</h2>
      <Calendar onDateSelect={onDateSelect} />
      <UploadChat setAlert={setAlert} />
      <div className='messagesContainer'>
        <div className='messages'>
          {questions?.map((msg, key) => (
            <div onClick={() => expandQuestion(key)}
              draggable
              onDragStart={(e) => handleDragStart(e, msg)}
              key={key}
              className={`message question ${expandedQuestion === key && 'expendedMes'} ${msg.inProcess && 'inProcess'}`}>
              <div className='date'  >{`${msg.sender}, ${displayDate(msg.date)}`}</div>
              {msg.message}
            </div>
          ))}
        </div>
        <div className='editContainer'>
          <span>כותרת</span>
          <input type='text' value={editObj.title} onChange={handleTitleChange} className='div_editor'   ></input>
          <span>שאלה</span>
          <div className='div_editor'
            ref={questionRef}
            contentEditable suppressContentEditableWarning={true}
            // onInput={handleQuestionChange}
            onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 'question')} >
            {editObj.question} </div>
          <span>תשובה</span>
          <div className='div_editor'
            ref={answerRef}
            contentEditable suppressContentEditableWarning={true}
            onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 'answer')}  >
            {editObj.answer}</div>
        </div>
        <div className='messages'>
          {answers?.map((msg, key) => (
            <div onClick={() => expandAnswer(key)}
              draggable onDragStart={(e) => handleDragStart(e, msg)}
              key={key}
              className={`message answer ${expandedAnswer === key && 'expendedMes'} ${msg.inProcess && 'inProcess'}`}>
              <div className='dateContainer'>
                <div className='date'>{`הרב אפרתי, ${displayDate(msg.date)}`}</div>
                <div className='undo' onClick={() => removeFromProcess(key)}>{msg.inProcess && <FaUndoAlt />}</div>
              </div>
              {msg.message}
            </div>
          ))}
        </div>
      </div>
      <MdDelete className='trash' onDragOver={handleDragOver} onDrop={handleDeledeDrop} ></MdDelete>
      <div onClick={handleSendQa}>שלח</div>

    </div>
  );
}  