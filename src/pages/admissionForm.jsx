import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from "../components/footer";

function AdmissionForm(){

    const navigate = useNavigate();
    const [formData, setFormData]= useState ({
        firstName: "",
        middleName: "",
        lastName: "",
        dob: "",
        age: "",
        gender: "",
        email: "",
        contact: "",
        nationality: "",
        religion: "",
        bloodGroup: "",
        aadhaar: "",
        fatherName: "",
        fatherOccupation: "",
        fatherContact: "",
        motherName: "",
        motherOccupation: "",
        motherContact: "",
        previousSchool: "",
        previousGrade: "",
        schoolAddress: "",
        medium: "",
        applyingGrade: "",
        academicYear: "",
        secondLanguage: "",
        transportMode: "",
        hostelFacility: "",
        allergies: "",
        medicalConditions: "",
        doctorName: "",
        emergencyContact: "",
    });
    const [files, setFiles] = useState({
        birthCertificate: null,
        addressProof: null,
        reportCard: null,
      });

    function handleChange(event){
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }
    function handleSubmit(){
        console.log("Form Submitted:", formData);
        alert("Form Submitted Successfully!");
    }
    function handleFileChange(event){
        setFiles({ ...files, [event.target.name]: event.target.files[0] });
    }
    return(
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
                <div className="bg-white shadow-lg rounded-lg p-8 w-3/5">
                    <h2 className="text-2xl font-bold text-center text-gray-700">Student Admission Form</h2>
                    <p className="text-gray-500 text-center mb-4">Please fill out the form carefully.</p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/*Student Information*/}
                        <div>
                            <label className="block text-gray-600 font-semibold">
                                Student Information:
                                </label>
                            <div className="grid grid-cols-3 gap-3">
                                <input type="text" name="firstName" placeholder="First Name" 
                                    className="border p-2 rounded w-full" 
                                    onChange={handleChange} required />
                                <input type="text" name="middleName" placeholder="Middle Name" 
                                    className="border p-2 rounded w-full" 
                                    onChange={handleChange} />
                                <input type="text" name="lastName" placeholder="Last Name" 
                                    className="border p-2 rounded w-full" 
                                    onChange={handleChange} required />
                            </div>
                            <div className="grid grid-cols-3 gap-3 mt-2">
                                <input type="date" name="dob" 
                                    className="border p-2 rounded w-full" 
                                    onChange={handleChange} required />
                                <input type="text" name="age" placeholder="Age" 
                                    className="border p-2 rounded w-full" 
                                    onChange={handleChange} required />
                                <select name="gender" className="border p-2 rounded w-full" onChange={handleChange} required>
                                    <option value="">Select Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="grid grid-cols-2 gap-3 mt-2">
                                <input type="email" name="email" placeholder="Email" 
                                    className="border p-2 rounded w-full" 
                                    onChange={handleChange} />
                                <input type="text" name="contact" placeholder="Contact Number" 
                                    className="border p-2 rounded w-full" 
                                    onChange={handleChange} required />
                            </div>
                            <div className="grid mt-2 gap-3">
                                <input type="text" name="nationality" placeholder="Nationality" 
                                    className="border p-2 rounded w-full" 
                                    onChange={handleChange} required />
                                <input type="text" name="religion" placeholder="Religion" 
                                    className="border p-2 rounded w-full" 
                                    onChange={handleChange} required />
                                <input type="text" name="bloodGroup" placeholder="Blood Group" 
                                    className="border p-2 rounded w-full" 
                                    onChange={handleChange} required />
                                <input type="text" name="aadhar" placeholder="Student Aadhar Number (Optional)" 
                                    className="border p-2 rounded w-full" 
                                    onChange={handleChange} />
                            </div>
                        </div>
                        {/*Gurdian Information*/}
                        <div className="grid gap-3 mt-2">
                            <label className="block text-gray-600 font-semibold">
                                Parent/Gurdian Information:
                            </label>
                            {/*Father's Information*/}
                            <div className="grid grid-cols-3 gap-3">
                                <input type="text" name="fatherName" placeholder="Father's Name" 
                                    className="border p-2 rounded w-full" 
                                    onChange={handleChange} required />
                                <input type="text" name="fatherOccupation" placeholder="Father's Occupation" 
                                    className="border p-2 rounded w-full" 
                                    onChange={handleChange} />
                                <input type="text" name="fatherContact" placeholder="Father Contact Number" 
                                    className="border p-2 rounded w-full" 
                                    onChange={handleChange} required />
                            </div>
                            {/*Mother's Information*/}
                            <div className="grid grid-cols-3 gap-3">
                                <input type="text" name="motherName" placeholder="Mother's Name" 
                                    className="border p-2 rounded w-full" 
                                    onChange={handleChange} required />
                                <input type="text" name="motherOccupation" placeholder="Mother's Occupation"
                                    className="border p-2 rounded w-full" 
                                    onChange={handleChange} />
                                <input type="text" name="motherContact" placeholder="Mother's Contact Number" 
                                    className="border p-2 rounded w-full" 
                                    onChange={handleChange} required />
                            </div>
                            {/*Gurdian's Information*/}
                            <div className="grid grid-cols-3 gap-3">
                                <input type="text" name="gurdianName" placeholder="Gurdian's Name (if different)" 
                                    className="border p-2 rounded w-full" 
                                    onChange={handleChange} />
                                <input type="text" name="relationWithStudent" placeholder="Relationship with Student" 
                                    className="border p-2 rounded w-full" 
                                    onChange={handleChange} />
                                <input type="text" name="gurdianContact" placeholder="Gurdian's Contact Number" 
                                    className="border p-2 rounded w-full" 
                                    onChange={handleChange} />
                            </div>
                        </div>
                        {/*Previous School Information*/}
                        <div className="grid mt-2 gap-3">
                            <label className="block text-gray-600 font-semibold">
                                Previous School Details:
                            </label>
                            <input type="text" name="previousSchool" placeholder="Last School Attended" 
                                className="border p-2 rounded w-full" 
                                onChange={handleChange} />
                            <input type="text" name="previousGrade" placeholder="Previous Grade/Class" 
                                className="border p-2 rounded w-full" 
                                onChange={handleChange} />
                            <input type="text" name="schoolAddress" placeholder="School Address" 
                                className="border p-2 rounded w-full" 
                                onChange={handleChange} />
                            <select name="medium" className="border p-2 rounded w-full" onChange={handleChange} required>
                                <option value="">Select Medium</option>
                                <option>English</option>
                                <option>Hindi</option>
                                <option>Bengali</option>
                                <option>Other</option>
                            </select>
                            <input type="number" name="tcNumber" placeholder="Transfer Certificate (TC) Number" className="border p-2 rounded w-full" onChange={handleChange} />
                        </div>
                        {/*Addmission Details*/}
                        <div className="grid gap-3">
                            <label className="block text-gray-600 font-semibold">
                                Addmission Details:
                            </label>
                            <div className="grid grid-cols-2 gap-3">
                                <select name="applyingGrade" 
                                        className="border p-2 rounded w-full" 
                                        onChange={handleChange} required>
                                    <option value="">Select Grade/Class Applying for</option>
                                    <option>Class 5</option>
                                    <option>Class 6</option>
                                    <option>Class 7</option>
                                    <option>Class 8</option>
                                    <option>Class 9</option>
                                    <option>Class 10</option>
                                    <option>Class 11</option>
                                    <option>Class 12</option>
                                </select>
                                <select name="academicYear" 
                                        className="border p-2 rounded w-full" 
                                        onChange={handleChange} required>
                                    <option value="">Select Academic Year</option>
                                    <option>2025-26</option>
                                </select>
                            </div>
                            <div className="grid gap-3">
                                <select name="secondLanguage" 
                                        className="border p-2 rounded w-full" 
                                        onChange={handleChange} required>
                                    <option value="">Select Preffered Second Language</option>
                                    <option>English</option>
                                    <option>Hindi</option>
                                    <option>Bengali</option>
                                </select>
                                <select name="transportMode" 
                                        className="border p-2 rounded w-full" 
                                        onChange={handleChange} required>
                                    <option value="">Mode of Trasport</option>
                                    <option>Own Vehicle</option>
                                    <option>School Bus</option>
                                </select>
                                <select name="hostelFacility" 
                                        className="border p-2 rounded w-full" 
                                        onChange={handleChange} required>
                                    <option value="">Hostel Facility Required?</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid gap-3">
                            <label className="block text-gray-600 font-semibold">
                                Medical Infromation:
                            </label>
                            <input type="text" name="allergies" placeholder="Allergies (if any)" 
                                className="border p-2 rounded w-full" 
                                onChange={handleChange} />
                            <input type="text" name="medicalCondition" placeholder="Existing Medical Conditions" 
                                className="border p-2 rounded w-full" 
                                onChange={handleChange} />
                            <input type="text" name="doctorName" placeholder="Family Doctor's Name" 
                                className="border p-2 rounded w-full" 
                                onChange={handleChange} />
                            <input type="text" name="emergencyContact" placeholder="Emergency Contact Number" 
                                className="border p-2 rounded w-full" 
                                onChange={handleChange} />
                        </div>
                        <div className="grid gap-3">
                            <label className="block text-gray-600 font-semibold">
                                Upload Required Documents:
                            </label>
                            <div>
                                <label className="block text-gray-600 font-semibold">
                                    Birth Certificate:
                                </label>
                                <input 
                                    type="file" 
                                    name="birthCertificate" 
                                    onChange={handleFileChange} 
                                    className="w-full p-2 border border-gray-300 rounded mt-1" 
                                    required 
                                />
                            </div>
                            <div>
                                <label className="block text-gray-600 font-semibold">
                                    Address Proof:
                                </label>
                                <input 
                                    type="file" 
                                    name="addressProof" 
                                    onChange={handleFileChange} 
                                    className="w-full p-2 border border-gray-300 rounded mt-1" 
                                    required 
                                />
                            </div>
                            <div>
                                <label className="block text-gray-600 font-semibold">
                                    Report Card:
                                </label>
                                <input 
                                    type="file" 
                                    name="reportCard" 
                                    onChange={handleFileChange} 
                                    className="w-full p-2 border border-gray-300 rounded mt-1" 
                                    required 
                                />
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center mt-4">
                        {/* Buttons Container */}
                        <div className="flex justify-between w-1/3 space-x-4 mt-4">
                            <button type="button" 
                                    className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                                    onClick={() => navigate("/")}
                                >
                                Back
                            </button>
                            <button type="submit" 
                                    className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                                >
                                Submit
                            </button>
                        </div>
                        <p className="text-gray-600 mt-3">
                            Already have an account? &nbsp;
                            <button
                                className="text-purple-700 underline"
                                onClick={() => navigate("/login")}
                            >
                                Login Now!
                            </button>
                        </p>
                        </div>
                    </form>
                </div>
            </div>
            <Footer/>
        </>
    );
};
export default AdmissionForm;