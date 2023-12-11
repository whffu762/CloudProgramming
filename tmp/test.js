const jsons = [
    {
        "key": "major",
        "message": "필수 입력 사항입니다"
    },
    {
        "key": "period",
        "message": "YYYY-MM-DD~YYYY-MM-DD 형식으로 입력하세요"
    },
    {
        "key": "period",
        "message": "필수 입력 사항입니다"
    },
    {
        "key": "school",
        "message": "필수 입력 사항입니다"
    }
]

function makeResumes(jsons) {
    
    jsons.forEach((json, index) =>{

        console.log(`Error ${index + 1}: `);
        console.log(`Key : ${json.key}`);
        console.log(`Message: ${json.message}`);
        console.log('---');
    })
    
}


