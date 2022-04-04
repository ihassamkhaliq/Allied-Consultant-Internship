                        // Leap Year Challenge

        var year = prompt("Give the Year: ");
        if (year % 4 == 0) {
            if (year % 100 == 0) {
                if (year % 400==0) {
                    alert("It is a Leap Year")
                }else
                alert("It is not a leap year")
            }else
            alert("It is a Leap Year")
        } else
            alert("It is not a Leap Year");