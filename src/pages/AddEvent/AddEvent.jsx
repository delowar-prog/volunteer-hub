import React from 'react'

const AddEvent = () => {
    return (
        <div>
            <h1 className='bg-white p-10 text-2xl'>Add An Event</h1>
            <div className="">
                <div className="lex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full  bg-base-100">
                        <div className="card-body w-full">
                            <div className='flex gap-5'>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Event Title</span>
                                    </label>
                                    <input type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Event Date</span>
                                    </label>
                                    <input type="text" placeholder="email" className="input input-bordered" />
                                </div>
                            </div>
                            <div className='flex gap-5'>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Event Description</span>
                                    </label>
                                    <input type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Upload Banner</span>
                                    </label>
                                    <input type="file" />
                                </div>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEvent