"use client";

import { UserGroupIcon, ShieldCheckIcon, ArrowPathIcon, ServerIcon, CubeTransparentIcon, WrenchScrewdriverIcon, BookmarkIcon, CurrencyDollarIcon, CheckBadgeIcon, UserMinusIcon, UserPlusIcon, LinkIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const InfoDApp = () => {
    return (
        <div className="documentation-container max-w-7xl mx-auto px-4 py-12 space-y-12">


            <section className="intro text-center">
                <h1 className="text-5xl font-bold text-dark">SMARTHIRE DOCUMENTATION</h1>
            </section>

            <section className="intro">
                <h2 className="text-3xl font-semibold text-dark flex items-center space-x-3 py-4"><UserGroupIcon className="h-6 w-6 text-dark mr-2" />INTRODUCTION</h2>
                <p className="text-lg text-dark mt-4">
                    SmartHire is a Governance dApp designed for DAOs (Decentralized Autonomous Organizations), primarily aimed at automating the process of digital hiring and task execution. This solution seeks to optimize and streamline operations in decentralized environments by using smart contracts developed in Solidity, integrating tools such as Scaffold-ETH-2 and the AccessControl.sol library from OpenZeppelin.
                </p>
            </section>

            <section className="objective bg-secondary py-8 rounded-lg shadow-lg  transition-transform duration-300 hover:scale-105">
                <h2 className="text-3xl font-semibold text-center text-dark py-6">OBJECTIVE</h2>
                <p className="text-center text-lg text-dark mt-4">
                    Provide DAOs with an efficient, secure, and automated tool for managing digital hiring and assigned tasks, ensuring transparency, decentralization, and compliance through the implementation of roles and rewards in a blockchain environment.
                </p>
            </section>

            <section className="justification">
                <h2 className="text-3xl font-semibold text-dark flex items-center space-x-3 py-4"><CubeTransparentIcon className="h-6 w-6 text-dark mr-2" />JUSTIFICATION</h2>
                <p className="text-lg text-dark mt-4">
                    In the DAO ecosystem, efficient governance and automation are fundamental for success. SmartHire addresses the need for a system that facilitates task allocation, supervision, and rewards, eliminating barriers associated with traditional management methods while ensuring a secure and decentralized environment. The integration of tools such as OpenZeppelin allows for future extensibility and functional improvements with ease.
                </p>
            </section>

            <section className="scope bg-secondary py-6 rounded-lg shadow-lg  transition-transform duration-300 hover:scale-105">
                <h2 className="text-3xl font-semibold text-center text-dark py-4">SCOPE</h2>
                <ul className="text-dark mt-4 space-y-4 ml-8">
                    <li className="flex items-center space-x-3"><ShieldCheckIcon className="h-6 w-6 text-dark" /> <span>Providing a robust role structure with specific permissions: Administrators, Auditors, and Users.</span></li>
                    <li className="flex items-center space-x-3"><ArrowPathIcon className="h-6 w-6 text-dark" /> <span>Automating the assignment, execution, and verification of tasks within a DAO.</span></li>
                    <li className="flex items-center space-x-3"><CubeTransparentIcon className="h-6 w-6 text-dark" /> <span>Ensuring transparent rewards for users through blockchain transactions.</span></li>
                    <li className="flex items-center space-x-3"><ServerIcon className="h-6 w-6 text-dark" /> <span>Facilitating scalability and security through the OpenZeppelin library and Scaffold-ETH-2.</span></li>
                </ul>
            </section>

            <section className="functionality">
                <h2 className="text-3xl font-semibold text-center text-dark py-6">FUNCTIONALITY</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <div className="feature-card text-center p-6 bg-secondary rounded-lg shadow-lg  transition-transform duration-300 hover:scale-105">
                        <h3 className="text-xl font-bold text-dark py-4">ADMINISTRATOR</h3>
                        <ul className="text-dark mt-2 space-y-4">
                            <li className="flex items-center space-x-3 ml-3"><UserPlusIcon className="h-5 w-5 text-dark mr-2" /> Create Auditors.</li>
                            <li className="flex items-center space-x-3 ml-3"><BookmarkIcon className="h-5 w-5 text-dark mr-2" /> Create Tasks and assign responsible.</li>
                            <li className="flex items-center space-x-3 ml-3"><UserMinusIcon className="h-5 w-5 text-dark mr-2" /> Block or unblock Auditors.</li>
                        </ul>
                    </div>
                    <div className="feature-card text-center p-6 bg-secondary rounded-lg shadow-lg  transition-transform duration-300 hover:scale-105">
                        <h3 className="text-xl font-bold text-dark py-4">AUDITOR</h3>
                        <ul className="text-dark mt-2 space-y-4">
                            <li className="flex items-center space-x-3 ml-3"><CheckBadgeIcon className="h-5 w-5 text-dark mr-2" /> Verify that Users complete the assigned tasks.</li>
                        </ul>
                    </div>
                    <div className="feature-card text-center p-6 bg-secondary rounded-lg shadow-lg  transition-transform duration-300 hover:scale-105">
                        <h3 className="text-xl font-bold text-dark py-4">USER</h3>
                        <ul className="text-dark mt-2 space-y-4">
                            <li className="flex items-center space-x-3 ml-3"><CheckBadgeIcon className="h-5 w-5 text-dark mr-2" /> Accept tasks</li>
                            <li className="flex items-center space-x-3 ml-3"><CheckBadgeIcon className="h-5 w-5 text-dark mr-2" /> Execute assigned tasks.</li>
                            <li className="flex items-center space-x-3 ml-3"><CurrencyDollarIcon className="h-5 w-5 text-dark mr-2" /> Receive reward</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="functional-requirements py-8 mb-8">
                <h2 className="text-3xl font-semibold text-center text-dark py-8">FUNCTIONAL REQUIREMENTS</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-6">
                    <div className="req-card text-center p-6 bg-secondary rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                        <h3 className="text-xl font-bold text-dark py-4">INPUTS</h3>
                        <ul className="text-dark mt-2 space-y-4 ml-8">
                            <li className="flex items-center space-x-3"><WrenchScrewdriverIcon className="h-5 w-5 text-dark mr-2" /> Role Registration: Administrator, Auditor, and User.</li>
                            <li className="flex items-center space-x-3"><WrenchScrewdriverIcon className="h-5 w-5 text-dark mr-2" /> Task creation by the Administrator.</li>
                            <li className="flex items-center space-x-3"><WrenchScrewdriverIcon className="h-5 w-5 text-dark mr-2" /> Assignment of responsible parties to tasks.</li>
                            <li className="flex items-center space-x-3"><WrenchScrewdriverIcon className="h-5 w-5 text-dark mr-2" /> Submission of completed tasks by Users.</li>
                            <li className="flex items-center space-x-3"><WrenchScrewdriverIcon className="h-5 w-5 text-dark mr-2" /> Confirmation or rejection of tasks by Auditors.</li>
                        </ul>
                    </div>
                    <div className="req-card text-center p-6 bg-secondary rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                        <h3 className="text-xl font-bold text-dark py-4">PROCESSES</h3>
                        <ul className="text-dark mt-2 space-y-4 ml-8">
                            <li className="flex items-center space-x-3"><ShieldCheckIcon className="h-5 w-5 text-dark mr-2" /> Role-based permission validation.</li>
                            <li className="flex items-center space-x-3"><ShieldCheckIcon className="h-5 w-5 text-dark mr-2" /> Task and responsibility management.</li>
                            <li className="flex items-center space-x-3"><ShieldCheckIcon className="h-5 w-5 text-dark mr-2" /> Task completion confirmation.</li>
                            <li className="flex items-center space-x-3"><ShieldCheckIcon className="h-5 w-5 text-dark mr-2" /> Management of Auditor blocking and unblocking.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="non-functional-requirements bg-secondary py-8 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">

                <h2 className="text-3xl font-semibold text-center text-dark py-8">NON-FUNCTIONAL REQUIREMENTS</h2>
                <ul className="text-dark mt-4 space-y-4 ml-8">
                    <li className="flex items-center "><ShieldCheckIcon className="h-5 w-5 text-dark mr-2" /><span className="me-2 font-bold">Security: </span> Protection against unauthorized access through defined roles and permissions.</li>
                    <li className="flex items-center"><ShieldCheckIcon className="h-5 w-5 text-dark mr-2" /><span className="me-2 font-bold">Scalability: </span> Adaptation to a growing number of users and tasks without compromising performance.</li>
                    <li className="flex items-center"><ShieldCheckIcon className="h-5 w-5 text-dark mr-2" /><span className="me-2 font-bold">Performance: </span> Efficient response in task assignment, validation, and rewards.</li>
                    <li className="flex items-center"><ShieldCheckIcon className="h-5 w-5 text-dark mr-2" /><span className="me-2 font-bold">Availability: </span>  Continuous operability ensured on the blockchain network.</li>
                    <li className="flex items-center"><ShieldCheckIcon className="h-5 w-5 text-dark mr-2" /><span className="me-2 font-bold">Extensibility: </span> Easy addition of new functionalities and roles using OpenZeppelin.</li>
                    <li className="flex items-center"><ShieldCheckIcon className="h-5 w-5 text-dark mr-2" /><span className="me-2 font-bold">Usability: </span> User-friendly interface for interaction with roles within the dApp.</li>
                </ul>
            </section>

            <section className="technologies my-12 py-8 p-8">
                <h2 className="text-3xl font-semibold text-center text-dark py-8">TECHNOLOGIES</h2>
                <ul className="text-dark mt-4 space-y-4">
                    <li className="flex items-center space-x-3"><WrenchScrewdriverIcon className="h-5 w-5 text-dark mr-2" /><span className="font-bold">Solidity:</span> A programming language used for creating smart contracts, enabling secure automation of tasks and processes on the blockchain.</li>
                    <li className="flex items-center space-x-3"><WrenchScrewdriverIcon className="h-5 w-5 text-dark mr-2" /><span className="font-bold"> Scaffold-ETH-2:</span> An advanced framework that facilitates dApp development by integrating a complete setup for testing, deployment, and continuous development.</li>
                    <li className="flex items-center space-x-3"><WrenchScrewdriverIcon className="h-5 w-5 text-dark mr-2" /><span className="font-bold"> OpenZeppelin (AccessControl.sol):</span> A library providing predefined tools for managing roles and permissions in smart contracts, enhancing security and reducing code complexity.</li>
                    <li className="flex items-center space-x-3"><WrenchScrewdriverIcon className="h-5 w-5 text-dark mr-2" /><span className="font-bold"> Arbitrum Sepolia:</span> A scalable blockchain network compatible with Ethereum, used to deploy SmartHire’s smart contracts, ensuring reduced transaction costs and high efficiency.</li>
                </ul>
            </section>



            <section className="model py-8">
                <h2 className="text-3xl font-semibold text-center text-dark py-4">
                    BPMN Model and Business
                </h2>
                <div className="relative w-full h-[600px]">
                    <Image
                        src="/model.png"
                        alt="Model"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
            </section>

            <section className="sequence py-8">
                <h2 className="text-3xl font-semibold text-center text-dark py-4">
                    Sequence Diagram
                </h2>
                <div className="relative w-full h-[600px]">
                    <Image
                        src="/sequence.png"
                        alt="sequence"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
            </section>

            <section className="case py-8">
                <h2 className="text-3xl font-semibold text-center text-dark py-4">
                    Use Case
                </h2>
                <div className="relative w-full h-[600px]">
                    <Image
                        src="/case.png"
                        alt="case"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
            </section>


            <section className="dev-team py-8">
                <h2 className="text-3xl font-semibold text-center text-dark">
                    DEV TEAM
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8 ml-4">
                    <div className="dev-card text-center p-6 bg-primary rounded-lg shadow-lg  transition-transform duration-300 hover:scale-105">
                        <h3 className="text-xl font-bold text-dark py-4">Main Developer</h3>
                        <ul className="text-dark mt-2 space-y-4">
                            <li className="flex items-center"><UserCircleIcon className="h-5 w-5 text-dark mr-2" /><span className="me-2 font-bold">Name:</span> Carlos Henríquez</li>
                            <li className="flex items-center"><UserCircleIcon className="h-5 w-5 text-dark mr-2" /><span className="me-2 font-bold">Username:</span>NightmareFox12</li>
                            <li className="flex items-center"><LinkIcon className="h-5 w-5 text-dark mr-2" /><span className="me-2 font-bold">GitHub:</span> <a href="https://github.com/NightmareFox12" target="_blank" className="text-blue-600 hover:underline">GitHub Profile</a></li>
                            <li><span>Role in Project:</span> Main developer, responsible for the core programming of the dApp.</li>
                        </ul>
                    </div>

                    <div className="dev-card text-center p-6 bg-primary rounded-lg shadow-lg ml-4  transition-transform duration-300 hover:scale-105">
                        <h3 className="text-xl font-bold text-dark py-4">Developer and Documentation</h3>
                        <ul className="text-dark mt-2 space-y-4">
                            <li className="flex items-center"><UserCircleIcon className="h-5 w-5 text-dark mr-2" /><span className="me-2 font-bold"> Name:</span> Miguel Rodríguez</li>
                            <li className="flex items-center"><UserCircleIcon className="h-5 w-5 text-dark mr-2" /><span className="me-2 font-bold"> Username:</span>Echizen512</li>
                            <li className="flex items-center"><LinkIcon className="h-5 w-5 text-dark mr-2" /><span className="me-2 font-bold">GitHub:</span> <a href="https://github.com/Echizen512" target="_blank" className="text-blue-600 hover:underline">GitHub Profile</a></li>
                            <li><span>Role in Project:</span> Developer and responsible for documentation and writing detailed guides for the project.</li>
                        </ul>
                    </div>

                    <div className="dev-card text-center p-6 bg-primary rounded-lg shadow-lg mr-4  transition-transform duration-300 hover:scale-105">
                        <h3 className="text-xl font-bold text-dark py-4">Developer</h3>
                        <ul className="text-dark mt-2 space-y-4">
                            <li className="flex items-center"><UserCircleIcon className="h-5 w-5 text-dark mr-2" /><span className="me-2 font-bold">Name:</span> Miguel Mejías</li>
                            <li className="flex items-center"><UserCircleIcon className="h-5 w-5 text-dark mr-2" /><span className="me-2 font-bold">Username:</span>miguelmejias0512</li>
                            <li className="flex items-center"><LinkIcon className="h-5 w-5 text-dark mr-2" /><span className="me-2 font-bold">GitHub:</span> <a href="https://github.com/miguelmejias0512" target="_blank" className="text-blue-600 hover:underline">GitHub Profile</a></li>
                            <li><span>Role in Project:</span> Programmer, focusing on the development of secondary features and optimizations.</li>
                        </ul>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default InfoDApp;
