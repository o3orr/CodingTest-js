function solution(order) {
    var answer = 0;
    for (let i = 0; i < array.length; i++) {
        if(order[i].includes("americano") || order[i].includes("anything")) {
            answer += 4500; 
        } else if (order[i].include("cafelatte")) {
            answer += 5000;
        }    
    }
    return answer;
}