import { createContext, useState } from "react"
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            rating: 5,
            text: "Great app! 1"
        },
        {
            id: 2,
            rating: 7,
            text: "Great app! 2"
        },
        {
            id: 3,
            rating: 8,
            text: "Great app! 3"
        }
    ])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })


    // add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback,...feedback])
      }

    //   delete feedback
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')) {
          setFeedback(feedback.filter((item) => item.id!== id))
        }
      }

      //   update feedback item
      const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => item.id === id? {...item, ...updItem} :item))
      }

    //   set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({item, edit: true})
      }

    return (
        <FeedbackContext.Provider value={{ feedback, deleteFeedback, feedbackEdit, addFeedback, editFeedback, updateFeedback }}>
            {children}
        </FeedbackContext.Provider>
    )
}
export default FeedbackContext 