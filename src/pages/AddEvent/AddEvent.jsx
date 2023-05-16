import React from 'react'

const AddEvent = () => {

    const handleAddEvent=(event)=>{
        event.preventDefault()
        const form=event.target
        const title=form.title.value
        const date=form.date.value
        const description=form.description.value
        const image=form.image.value
        const eventData={
            title,date,description,image
        }
        console.log(eventData)
        fetch('http://localhost:5000/events',{
            method:'POST',
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify(eventData)
        }).then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                alert('Inserted successfully')
                form.reset()
            }
        })
    }
    return (
        <div>
            <h1 className='bg-white p-10 text-2xl'>Add An Event</h1>
            <div className="">
                <div className="lex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full  bg-base-100">
                        <div className="card-body w-full">
                            <form onSubmit={handleAddEvent}>
                                <div className='flex gap-5'>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Event Title</span>
                                        </label>
                                        <input type="text" name="title" placeholder="title" className="input input-bordered" />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Event Date</span>
                                        </label>
                                        <input type="date" name="date" className="input input-bordered" />
                                    </div>
                                </div>
                                <div className='flex gap-5'>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Event Description</span>
                                        </label>
                                        <textarea cols='20' rows="3" name="description" className='border border-gray-300 rounded-lg p-2'></textarea>
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Upload Banner</span>
                                        </label>
                                        <input type="file" name="image"/>
                                    </div>
                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEvent