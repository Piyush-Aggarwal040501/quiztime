import React, { useEffect } from "react";
import GoogleAuth from "../Auth/GoogleAuth";
import "./style.css";
function Home() {
	useEffect(() => {
		localStorage.clear()
	})
	return (
		<div className="vh-100 align-items-center">
			<div className="home p-5">
				<div id="logo">QuizTime</div>
				<div className="my-2 h3 heading">Leran Then Earn</div>
				<div className="h5 my-2 subHeading">
					Absolutely free quizes for student from the graduated teachers having high quality of experience and knowledge.
				</div>
				<div className="h5 my-2 subHeading">
					Education is our passport to the future, for tomorrow belongs to the people who prepare for it today.
					Nine-tenths of education is encouragement.
					The art of teaching is the art of assisting discovery.
					A teacher affects eternity; he can never tell where his influence stops.</div>
				<div className="h5 my-5">
					<GoogleAuth />
				</div>
			</div>
		</div>
	);
}

export default Home;
