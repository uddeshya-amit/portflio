import React from "react";
import python from "./assets/python.png";
import js from "./assets/js.png";
import c from "./assets/letter-c.png";
import react from "./assets/react.svg";
import node from "./assets/node-js-icon.svg";
import express from "./assets/express-js-icon.svg";
import html from "./assets/html-5.png";
import css from "./assets/social.png";
import tailwind from "./assets/tailwind-css-icon.svg";
import chatgpt from "./assets/chatgpt-icon.svg";
import git from "./assets/git-icon.svg";
import vscode from "./assets/visual-studio-code-icon.svg";
import mdb from "./assets/mongodb-icon.svg";
import mysql from "./assets/mysql.png";
import postgres from "./assets/postgresql.svg";

function Skills() {
	return (
		<div className="h-screen  text-white overflow-hidden lg:px-8">
			<div className="mt-14  px-8">
				<h1
					className="text-3xl bg-gradient-to-r from-gray-400 via-gray-200 to-white bg-clip-text text-transparent 
                   lg:text-6xl font-bold">
					My Tech Skills
				</h1>
			</div>
			<div className="px-8 mt-16 grid grid-cols-2">
				<div className="flex  flex-col  items-center ">
					<div className=" mb-10">
						<p className="text-4xl font-semibold">programming languages</p>
					</div>
					<div className="flex gap-14 ">
						{[
							{
								name: "Python",
								src: python,
							},
							{
								name: "JavaScript",
								src: js,
							},
							{
								name: "C language",
								src: c,
							},
						].map((lang, i) => {
							return (
								<div>
									<img
										src={lang.src}
										key={i}
										title={lang.name}
										alt=""
										className=" size-16  hover:scale-110 transition-all ease-in-out duration-125 cursor-pointer "
									/>
								</div>
							);
						})}
					</div>
				</div>
				<div className="flex  flex-col  items-center ">
					<div className=" mb-10">
						<p className="text-4xl font-semibold">web dev</p>
					</div>
					<div className="grid grid-cols-3 gap-14">
						{[
							{
								name: "HTML",
								src: html,
							},
							{
								name: "CSS",
								src: css,
							},
							{
								name: "Tailwind CSS",
								src: tailwind,
							},
							{
								name: "React",
								src: react,
							},
							{
								name: "Node js",
								src: node,
							},
							{
								name: "Express js",
								src: express,
							},
						].map((lang, i) => {
							return (
								<div>
									<img
										src={lang.src}
										key={i}
										title={lang.name}
										alt=""
										className={`size-16 ${
											i == 5 ? "invert" : ""
										} hover:scale-110 transition-all ease-in-out duration-125 cursor-pointer`}
									/>
								</div>
							);
						})}
					</div>
				</div>

				<div className="flex  flex-col  items-center  mt-12">
					<div className="">
						<p className="text-4xl font-semibold"> databases</p>
					</div>
					<div className="grid grid-cols-3 mt-10 gap-14">
						{[
							{
								name: "SQL",
								src: mysql,
							},
							{
								name: "Postgresql",
								src: postgres,
							},
							{
								name: "Mongodb",
								src: mdb,
							},
						].map((lang, i) => {
							return (
								<div>
									<img
										src={lang.src}
										key={i}
										title={lang.name}
										alt=""
										className=" size-16 hover:scale-110 transition-all ease-in-out duration-125 cursor-pointer"
									/>
								</div>
							);
						})}
					</div>
				</div>
				<div className="flex  flex-col  items-center mt-12">
					<div className=" ">
						<p className="text-4xl font-semibold">dev tools</p>
					</div>
					<div className="grid grid-cols-3 mt-10 gap-14">
						{[
							{
								name: "git",
								src: git,
							},
							{
								name: "VsCode",
								src: vscode,
							},
							{
								name: "chatgpt",
								src: chatgpt,
							},
						].map((lang, i) => {
							return (
								<div>
									<img
										src={lang.src}
										key={i}
										alt=""
										title={lang.name}
										className=" size-16 hover:scale-110 transition-all ease-in-out duration-125 cursor-pointer"
									/>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Skills;
