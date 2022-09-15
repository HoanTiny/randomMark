/* Viết 1 hàm getRandomMark trả về điểm random từ 6 đến 10, bước nhảy 0.5
Tạo 1 mảng diemthi danh sách điểm thi của 5 bạn A, B, C, D, E gồm điểm random
 các môn toán, văn, lí, hóa, sinh ( maths, literature, physics, chemistry, biology) bằng hàm đã tạo ở trên
Viết hàm trả về điểm trung bình của các bạn với điểm văn và toán nhân đôi. 
(Viết hàm để có thể xử lí nếu có nhiều hơn 5 môn kể trên)
Lọc những bạn có điểm trung bình >= 8, tìm bạn có điểm trung bình cao nhất, tìm bạn có điểm văn thấp nhất
Viết hàm để tạo bản sao (clone) của diemthi
Với mỗi điểm trên 8, trên 9 và 10 lần lượt được thưởng 1m, 2m và 5m.
Tính số tiền thưởng của các bạn
Giả sử mỗi bạn phải thi 5 môn trên 10 lần vào 10 ngày khác nhau.
Viết hàm để tính điểm trung bình tại 1 thời điểm cụ thể (tự random ngày tháng năm) */
const pointsA = [];
const pointsB = [];
const pointsC = [];
const pointsD = [];
const pointsE = [];
const pointsClone = [];

const subjects = [
    "Math",
    "literature",
    "physics",
    "chemistry",
    "biology",
    "Dia ly",
];

function getRandomMark(min, max, arr) {
    for (let i = 0; i < subjects.length; i++) {
        arr.push({
            subject: `${subjects[i]}`,
            score:
                Math.floor(Math.random() * (max * 2 - min * 2 + 1) + min * 2) /
                2,
        });

        // if (arr[i].score %2 === 0) {
        //     arr[i].score = arr[i].score/2;
        // } else {}
        // if (arr[i].score <= 5.5) {
        //     arr[i].score = 6;
        // }
    }
    return arr;
}
console.log(getRandomMark(6, 10, pointsA));
console.log(getRandomMark(6, 10, pointsB));
console.log(getRandomMark(6, 10, pointsC));
console.log(getRandomMark(6, 10, pointsD));
console.log(getRandomMark(6, 10, pointsE));

function pointAverage(arrPoints) {
    var average = 0;
    var pointXhai = 0;
    for (let i = 0; i < arrPoints.length; i++) {
        if (
            arrPoints[i].subject == "Math" ||
            arrPoints[i].subject == "literature"
        ) {
            pointXhai += arrPoints[i].score * 2;
        } else {
            average += arrPoints[i].score;
        }
        var avg = ((average + pointXhai) / (arrPoints.length + 2)).toFixed(1);
    }
    return avg;
}

function clonePoints(arr) {
    const arrTest = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            arrTest.push(arr[i][j].score);
        }
    }
    while (arrTest.length) {
        pointsClone.push(arrTest.splice(0, subjects.length));
    }
    return pointsClone;
}

function returnPoint(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 8) {
            console.log("Điểm trung bình trên 8: ", arr[i]);
        }
    }
    console.log("Max là: ", Math.max.apply(null, arr));
    console.log("Min là: ", Math.min.apply(null, arr));
}

function tienthuong(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        if (8 <= arr[i].score && arr[i].score <= 9) {
            result += 1000000;
        } else if (9 < arr[i].score && arr[i].score < 10) {
            result += 2000000;
        } else if (arr[i].score === 10) {
            result += 3000000;
        } else {
            result += 0;
        }
    }

    return result;
}

returnPoint([
    pointAverage(pointsA),
    pointAverage(pointsB),
    pointAverage(pointsC),
    pointAverage(pointsD),
    pointAverage(pointsE),
]);

console.log("tien thưởng của A: ", tienthuong(pointsA));
console.log("tien thưởng của B: ", tienthuong(pointsB));
console.log("tien thưởng của C: ", tienthuong(pointsC));
console.log("tien thưởng của D: ", tienthuong(pointsD));
console.log("tien thưởng của E: ", tienthuong(pointsE));

console.log(
    "Mảng điểm clone:",
    clonePoints([pointsA, pointsB, pointsC, pointsD, pointsE])
);
