import { useFormStatus } from "react-dom";

function Contact(){

    const handleSubmit = async ()=>{
        await new Promise(res => setTimeout(res,2000));
    }

    function CustomerForm(){

        const {pending} =useFormStatus();
        
        return(
            <section className="section-contact">
                <h2 className="container-title">Cotact Us</h2>

                 <div className="container-rapper">
                        <input type="text" className="form-control  bg-blue-box" name="username" placeholder="Enter your Name" /><br /><br />
                        <input type="text" className="form-control bg-blue-box" name="email" autoComplete="off" placeholder="Enter your Email" /><br /><br />
                        <textarea style={{height:"10rem", overflow:'hidden'}} name="message" className="form-control" rows="10" autoComplete="off" placeholder="Enter your Message"></textarea><br /><br />
                        <button disabled={pending}>{pending?'Submitting...' : 'Submit'}</button>
                </div>
            </section>
        )
    }

    return(
        <>
            <form action={handleSubmit}>
                <CustomerForm/>
            </form>
        </>
    )
}
export default Contact;



// function Contact() {

//     const handleFormSubmit = (formData) => {
        
//         const formInputData = object.formEntries(formData.entries());
//         //console.log(formData.entries());
//     };
//     return (
//         <>
//             <section className="section-contact">
//                 <h2 className="container-title">Cotact Us</h2>

//                 <div className="container-rapper">
//                     <form action="handleFormSubmit">
//                         <input type="text" className="form-control  bg-blue-box" name="username" placeholder="Enter your Name" /><br /><br />
//                         <input type="text" className="form-control bg-blue-box" name="email" autoComplete="off" placeholder="Enter your Email" /><br /><br />
//                         <textarea style={{height:"10rem", overflow:'hidden'}} name="message" className="form-control" rows="10" autoComplete="off" placeholder="Enter your Message"></textarea><br /><br />
//                         <button type="submit">Send</button>
//                     </form>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default Contact;

