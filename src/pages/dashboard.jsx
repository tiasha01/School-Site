import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";

function Dashboard(){
    const navigate = useNavigate();
    useEffect(() => {
        const isAuthenticated = localStorage.getItem("isAuthenticated");

        if (!isAuthenticated) {
            navigate("/login"); // Redirect to login if not authenticated
        }
    }, [navigate]);
    return(
        <>
            <div>
            <h1>DASHBOARD</h1>
            </div>
            <Footer/>
        </>
    );
};

export default Dashboard;