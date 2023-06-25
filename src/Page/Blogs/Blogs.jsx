import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blogs = () => {
    useTitle('Blogs')
    return (
        <div className='py-6'>
            <h1 className='text-center font-extrabold text-3xl my-3'>All Answer are here below:</h1>
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    What is an access token and refresh token? How do they work and where should we store them on the client-side?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">

                    <h3>
                        Refresh tokens allow you to balance your users' access needs with your organization's security practices. Access tokens help users get the resources they need to complete their tasks, but such tokens can also expose your organization to data compromise or other malicious actions if a hacker is able to steal them
                    </h3>

                    <h3>
                        Most major modern websites are dynamic — they store data on the server using some kind of database (server-side storage), then run server-side code to retrieve needed data, insert it into static page templates, and serve the resulting HTML to the client to be displayed by the user's browser.

                        Client-side storage works on similar principles, but has different uses. It consists of JavaScript APIs that allow you to store data on the client (i.e. on the user's machine) and then retrieve it when needed
                    </h3>
                </div>
            </div>
            <br />

            {/* ans to the question no 2 */}
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                Compare SQL and NoSQL databases?
                </div>
                <div className="collapse-content bg-primary text-black peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <div className="overflow-x-auto">
                        <table className="table w-full text-black">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>SQL</th>
                                    <th>NoSQL</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <th>1</th>
                                    <td>Relational Database
                                        management system</td>
                                    <td>Distributed Database
                                        management system</td>
                                </tr>
                                {/* row 2 */}
                                <tr>
                                    <th>2</th>
                                    <td>SQL databases are vertically scalable.</td>
                                    <td>NoSQL databases are horizontally scalable.</td>

                                </tr>
                                {/* row 3 */}
                                <tr>
                                    <th>3</th>
                                    <td>SQL databases use structured query language (SQL) and have a predefined schema</td>
                                    <td>NoSQL databases have dynamic schemas for unstructured data.</td>

                                </tr>
                                <tr>
                                    <th>4</th>
                                    <td>SQL databases are better for multi-row transactions</td>
                                    <td>NoSQL is better for unstructured data like documents or JSON.</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <br />

            {/* ans to the question no 3 */}
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    What is express js? What is Nest JS?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <h1>Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes</h1>
                    <h1>
                        It is an open-source Node. js framework for developing challenging backend systems that use the design paradigm convention over configuration that eliminates the need for explicit configuration by allowing developers to utilize common tools and code in a particular way
                    </h1>
                </div>
            </div>
            <br />

            {/* answer to the question no 4 */}
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    What is MongoDB aggregate and how does it work?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    Mongoose's aggregate() function returns an instance of Mongoose's Aggregate class. Aggregate instances are thenable, so you can use them with await and promise chaining. The Aggregate class also supports a chaining interface for building aggregation pipelines.
                </div>
            </div>
            <br />

        </div>
    );
};

export default Blogs;