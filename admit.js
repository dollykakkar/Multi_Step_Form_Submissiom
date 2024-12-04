
let formData = {};

document.addEventListener("DOMContentLoaded", () => {
    // Get references to forms and buttons
    const form1 = document.getElementById("form1");
    const form2 = document.getElementById("form2");
    const form3 = document.getElementById("form3");
    const form4 = document.getElementById("form4");
    const form5 = document.getElementById("form5");
    const form6 = document.getElementById("form6");

    function validateInputs(form) {
        const inputs = form.querySelectorAll("input");
        for (const input of inputs) {
            if (!input.value.trim()) {
                alert(`Please fill out the ${input.previousElementSibling?.innerText || "required field"}`);
                input.focus();
                return false;
            }
        }
        return true;
    }

    // Form 1 Validation 
    document.getElementById("next1").addEventListener("click", function (event) {
        event.preventDefault();
        if (validateInputs(form1)) {

            //save the form 1 input data...........
            formData.Student_Name = document.getElementById("sname").value;
            formData.fathers_Name = document.getElementById("fname").value;
            formData.Gender = document.getElementById("gender").value;
            formData.Mothers_Name = document.getElementById("mname").value;
            formData.Category = document.getElementById("category").value
            formData.Cast = document.getElementById("cast").value
            formData.Date_of_birth = document.getElementById("date").value
            formData.Adhar_No = document.getElementById("aadharno").value
            formData.Gardians_Name = document.getElementById("gname").value
            formData.Father_Occupation = document.getElementById("father").value
            formData.Religion = document.getElementById("religion").value


            form1.classList.add("hidden");
            form2.classList.remove("hidden");
            document.getElementById("title").innerText = "Address";

            const div2 = document.getElementById("div2");
            if (div2) {

                div2.classList.add("bg-blue-500", "text-white");
                div2.classList.remove("bg-gray-300", "text-gray-500")

                const p2 = document.getElementById("p2");
                if (p2) {
                    p2.classList.add("text-blue-500", "font-semibold");
                    p2.classList.remove("text-gray-500");
                }
            }

        }
    });

    //Form2 validation....

    document.getElementById("next2").addEventListener("click", function (event) {
        event.preventDefault();

        if (validateInputs(form2)) {

            console.log(validateInputs(form2))
            //save form2 data.....

            formData.Mobile_No = document.getElementById("number").value;
            formData.E_mail = document.getElementById("mail").value;
            formData.Domicile_State = document.getElementById("State").value;
            formData.Home_District = document.getElementById("dist").value;
            formData.Home_Block = document.getElementById("Block").value;
            formData.Pin_Code = document.getElementById("code").value;
            formData.Permanent_Address = document.getElementById("adrs").value;

            form2.classList.add("hidden");
            form3.classList.remove("hidden");

            document.getElementById("title").innerText = "Academic Details";

            const div3 = document.getElementById("div3");
            if (div3) {
                div3.classList.add("bg-blue-500", "text-white");
                div3.classList.remove("bg-gray-300", "text-gray-500");

                const p3 = div3.querySelector("p");
                if (p3) {
                    p3.classList.add("text-blue-500");
                    p3.classList.remove("text-gray-500");
                }
            }
        }
    });

    //Form3 Validation..........
    document.getElementById("next3").addEventListener("click", function (event) {
        event.preventDefault();
        if (validateInputs(form3)) {

            //save form3 data.............
            formData.Apply = document.getElementById("apply").value;
            formData.Status = document.getElementById("status").value;
            formData.Institute_Dist = document.getElementById("institute").value;
            formData.Institute_Block = document.getElementById("block").value;
            formData.Institute_Name = document.getElementById("name").value;
            formData.Course_Name = document.getElementById("course").value;

            form3.classList.add("hidden");
            form4.classList.remove("hidden");
            document.getElementById("title").innerText = "Upload Documents";

            const div4 = document.getElementById("div4");
            if (div4) {
                div4.classList.add("bg-blue-500", "text-white");
                div4.classList.remove("bg-gray-300", "text-gray-500");

                const p4 = div4.querySelector("p");
                if (p4) {
                    p4.classList.add("text-blue-500");
                    p4.classList.remove("text-gray-500");
                }
            }
        }
    });

    document.getElementById("next4").addEventListener("click", function (event) {
        event.preventDefault();
        if (validateInputs(form4)) {

            formData.marksheet = document.getElementById("marksheet").value;
            formData.adhar_card = document.getElementById("aadhaar").value;
            formData.photo = document.getElementById("photo").value;

            form4.classList.add("hidden");
            form5.classList.remove("hidden");
            document.getElementById("title").innerText = "Payment";

            const div5 = document.getElementById("div5");
            if (div5) {
                div5.classList.add("bg-blue-500", "text-white");
                div5.classList.remove("bg-gray-300", "text-gray-500");

                const p5 = div5.querySelector("p");
                if (p5) {
                    p5.classList.add("text-blue-500");
                    p5.classList.remove("text-gray-500");
                }
            }
        }
    });

    document.getElementById("next5").addEventListener("click", function (event) {
        event.preventDefault();
        if (validateInputs(form5)) {

            formData.trans_id = document.getElementById("trans_id").value;
            formData.payment_date = document.getElementById("payment_date").value;
            formData.pay_amount = document.getElementById("amount").value;
            formData.pay_mode = document.getElementById("mode").value;

            form5.classList.add("hidden");
            form6.classList.remove("hidden");
            alert("Congratulations, you have completed the process successfully!");
            document.getElementById("title").innerText = "Final Submission";

            const div6 = document.getElementById("div6");
            if (div6) {
                div6.classList.add("bg-blue-500", "text-white");
                div6.classList.remove("bg-gray-300", "text-gray-500");

                const p6 = div6.querySelector("p");
                if (p6) {
                    p6.classList.add("text-blue-500");
                    p6.classList.remove("text-gray-500");
                }
            }
            const review = document.getElementById("review");
            review.innerHTML = `
            <p><strong>Name:</strong> ${formData.Student_Name}</p>
            <p><strong>Father_Name:</strong> ${formData.fathers_Name}</p>
            <p><strong>Gender:</strong> ${formData.Gender}</p>
            <p><strong>Mother_Name:</strong> ${formData.Mothers_Name}</p>
            <p><strong>Category:</strong> ${formData.Category}</p>
            <p><strong>Cast:</strong> ${formData.Cast}</p>
            <p><strong>Date_of_Birth:</strong> ${formData.Date_of_birth}</p>
            <p><strong>Adhar_No:</strong> ${formData.Adhar_No}</p>
            <p><strong>Gardians_Name:</strong> ${formData.Gardians_Name}</p>
            <p><strong>Father_Occupation:</strong> ${formData.Father_Occupation}</p>
            <p><strong>Religion:</strong> ${formData.Religion}</p>
            `;
            const review2 = document.getElementById("review2");
            review2.innerHTML = `
            <p><strong>Mobile_No:</strong> ${formData.Mobile_No}</p>
            <p><strong>Email:</strong> ${formData.E_mail}</p>
            <p><strong>Domicile State:</strong> ${formData.Domicile_State}</p>
            <p><strong>Home_District:</strong> ${formData.Home_District}</p>
            <p><strong>Home_Block:</strong> ${formData.Home_Block}</p>
            <p><strong>PinCode:</strong> ${formData.Pin_Code}</p>
            <p><strong>Permanent_Address:</strong> ${formData.Permanent_Address}</p>
            // `;
            const review3 = document.getElementById("review3");
            review3.innerHTML = `
            <p><strong>Mobile_No:</strong> ${formData.Apply}</p>
            <p><strong>Email:</strong> ${formData.Status}</p>
            <p><strong>Domicile State:</strong> ${formData.Institute_Dist}</p>
            <p><strong>Home_District:</strong> ${formData.Institute_Block}</p>
            <p><strong>Home_Block:</strong> ${formData.Institute_Name}</p>
            <p><strong>PinCode:</strong> ${formData.Course_Name}</p>
             `;
            const review4 = document.getElementById("review4");
            review4.innerHTML = `
            <p><strong>Secondary Marksheet:</strong> ${formData.marksheet}</p>
            <p><strong>Adhar Card:</strong> ${formData.adhar_card}</p>
            <p><strong>Photo:</strong> ${formData.photo}</p>
             `;
            const review5 = document.getElementById("review5");
            review5.innerHTML = `
            <p><strong>Transaction_Id:</strong> ${formData.trans_id}</p>
            <p><strong>Payment_Date:</strong> ${formData.payment_date}</p>
            <p><strong>Payment_Amount:</strong> ${formData.pay_amount}</p>
            <p><strong>Payment_Mode:</strong> ${formData.pay_mode}</p>
             `;
        }
    });
});
