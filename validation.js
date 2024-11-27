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
            form1.classList.add("hidden");
            form2.classList.remove("hidden");
            document.getElementById("title").innerText = "Address";

            const div2 = document.getElementById("div2");
            if (div2) {
                div2.classList.add("bg-blue-500", "text-white");
                div2.classList.remove("bg-gray-300", "text-gray-500");

                const p2 = div2.querySelector("p");
                if (p2) {
                    p2.classList.add("text-blue-500");
                    p2.classList.remove("text-gray-500");
                }
            }
        }
    });

    document.getElementById("next2").addEventListener("click", function (event) {
        event.preventDefault();
        if (validateInputs(form2)) {
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

    document.getElementById("next3").addEventListener("click", function (event) {
        event.preventDefault();
        if (validateInputs(form3)) {
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
        }
    });
});
