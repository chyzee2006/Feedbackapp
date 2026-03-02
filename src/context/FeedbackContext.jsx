import { createContext, useState, useEffect } from "react"

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [Isloading, setIsloading] = useState(true)
    const [feedback, setFeedback] = useState([])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })

    useEffect(() => {
      fetchFeedback()
    }, [])

    // fetch feedback
    const fetchFeedback = async () => {
      const response = await fetch(
        "https://chyzee-feedbackapp.netlify.app?_sort=id&_order=desc",
      );
      const data = await response.json()

      setFeedback(data)
      setIsloading(false)
    }

    // add feedback
    const addFeedback = async(newFeedback) => {
      const response = await fetch("https://chyzee-feedbackapp.netlify.app", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newFeedback),
      });
        const data = await response.json()

        setFeedback([data,...feedback])
      }

    //   delete feedback
    const deleteFeedback = async (id) => {
        if(window.confirm('Are you sure you want to delete?')) {
           await fetch(`https://chyzee-feedbackapp.netlify.app${id}`, {
            method: "DELETE",
          })

          setFeedback(feedback.filter((item) => item.id!== id))
        }
      }

      //   update feedback item
      const updateFeedback = async (id, updItem) => {
        const response = await fetch(
          `https://chyzee-feedbackapp.netlify.app${id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updItem),
          },
        );
          const data = await response.json()

        setFeedback(feedback.map((item) => item.id === id? {...item, ...data} :item))
      }

    //   set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({item, edit: true})
      }

    return (
        <FeedbackContext.Provider value={{ feedback, deleteFeedback, feedbackEdit, addFeedback, editFeedback, updateFeedback, Isloading }}>
            {children}
        </FeedbackContext.Provider>
    )
}
export default FeedbackContext 