import React from 'react';

const commentsData = [
    {
        name: "Ramesh V",
        text: "Lorem ipsum dolor sit meet, consectetur adip",
        replies: [
            {
                name: "John D",
                text: "Reply to Ramesh's comment",
                replies: [
                    {
                        name: "Jane P",
                        text: "Reply to John's comment",
                        replies: [
                            {
                                name: "Sam R",
                                text: "Reply to Jane's comment",
                                replies: [
                                    {
                                        name: "Kiran K",
                                        text: "Reply to Sam's comment",
                                        replies: [],
                                    },
                                    {
                                        name: "Tina S",
                                        text: "Another reply to Sam's comment",
                                        replies: [],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        name: "Lucas M",
                        text: "Another reply to John's comment",
                        replies: [
                            {
                                name: "Sofia T",
                                text: "Reply to Lucas's comment",
                                replies: [
                                    {
                                        name: "Praveen J",
                                        text: "Reply to Sofia's comment",
                                        replies: [],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                name: "Ravi K",
                text: "Another reply to Ramesh",
                replies: [],
            },
            {
                name: "Neha J",
                text: "Yet another reply to Ramesh",
                replies: [],
            },
        ],
    },
    {
        name: "Ayesha A",
        text: "This is a top-level comment",
        replies: [
            {
                name: "Anil S",
                text: "Reply to Ayesha",
                replies: [],
            },
        ],
    },
    {
        name: "Pradeep B",
        text: "Top-level comment by Pradeep",
        replies: [
            {
                name: "Vikram R",
                text: "Reply to Pradeep's comment",
                replies: [
                    {
                        name: "Nina P",
                        text: "Reply to Vikram's comment",
                        replies: [],
                    },
                ],
            },
            {
                name: "Arun K",
                text: "Reply to Pradeep's comment",
                replies: [
                    {
                        name: "Krishna M",
                        text: "Reply to Arun's comment",
                        replies: [
                            {
                                name: "Geeta D",
                                text: "Reply to Krishna's comment",
                                replies: [],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: "Sita L",
        text: "This is Sita's comment",
        replies: [
            {
                name: "Rajesh D",
                text: "Reply to Sita's comment",
                replies: [],
            },
        ],
    },
    {
        name: "Kiran P",
        text: "Kiran's comment",
        replies: [
            {
                name: "Sandeep T",
                text: "Reply to Kiran's comment",
                replies: [],
            },
            {
                name: "Ravi M",
                text: "Another reply to Kiran",
                replies: [
                    {
                        name: "Rita B",
                        text: "Reply to Ravi's comment",
                        replies: [],
                    },
                    {
                        name: "Manoj A",
                        text: "Another reply to Ravi's comment",
                        replies: [],
                    },
                ],
            },
        ],
    },
    {
        name: "Divya S",
        text: "Top-level comment by Divya",
        replies: [
            {
                name: "Amit R",
                text: "Reply to Divya's comment",
                replies: [],
            },
        ],
    },
    {
        name: "Ashok P",
        text: "Ashok's comment",
        replies: [],
    },
    {
        name: "Vishal G",
        text: "Vishal's comment on this post",
        replies: [
            {
                name: "Pooja K",
                text: "Reply to Vishal's comment",
                replies: [],
            },
        ],
    },
    {
        name: "Kavita D",
        text: "Comment by Kavita",
        replies: [],
    },
    {
        name: "Rohit K",
        text: "Rohit's comment here",
        replies: [
            {
                name: "Tanvi P",
                text: "Reply to Rohit's comment",
                replies: [],
            },
        ],
    },
    {
        name: "Sneha B",
        text: "Sneha's comment",
        replies: [],
    },
    {
        name: "Mohan S",
        text: "Comment by Mohan",
        replies: [
            {
                name: "Rita G",
                text: "Reply to Mohan's comment",
                replies: [],
            },
        ],
    },
    {
        name: "Sunita A",
        text: "Sunita's comment here",
        replies: [],
    },
    {
        name: "Vikram S",
        text: "Comment by Vikram",
        replies: [
            {
                name: "Shivani K",
                text: "Reply to Vikram's comment",
                replies: [],
            },
        ],
    },
    {
        name: "Nikhil P",
        text: "Nikhil's comment",
        replies: [],
    },
    {
        name: "Lina B",
        text: "Lina's comment here",
        replies: [
            {
                name: "Sujit P",
                text: "Reply to Lina's comment",
                replies: [],
            },
        ],
    },
    {
        name: "Rahul G",
        text: "Comment by Rahul",
        replies: [
            {
                name: "Tanya K",
                text: "Reply to Rahul's comment",
                replies: [],
            },
        ],
    },
];


const Comment = ({ data }) => {
    const { name, text, replies } = data;
    return (
        <div className='flex shadow-5m bg-gray-100 p-2 rounded-lg my-2'>
            <img
                className="w-6 h-6"
                alt="user"
                src="https://tse3.mm.bing.net/th?id=OIP.HHVUf3TYqncgpJXyCMmxyAHaHa&pid=Api&P=0&h=180"
            />
            <div className='px-3'>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
            </div>
        </div>
    );
};

const CommentList = ({ comments }) => {
    return comments.map((comment, index) => {
        return (  // Added return inside the map function
            <div key={index}>
                <Comment data={comment} />
                {comment.replies.length > 0 && (
                    <div className='pl-5 border border-l-black ml-5'>
                        <CommentList comments={comment.replies} />
                    </div>
                )}
            </div>
        );
    });
    
};

const CommentsContainer = () => {
    return (
        <div className='m-5 p-2'>
            <h1 className='text-2xl font-bold'>Comments: </h1>
            <CommentList comments={commentsData} />
        </div>
    );
};

export default CommentsContainer;
