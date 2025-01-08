const key="4f00ef2f-b7a0-4229-a29f-8996391e9e80"
const api="https://api.cricapi.com/v1/currentMatches?apikey="+key
function getMatches(){
    let txt=""
 $.getJSON(api,function (data){
    $.each(data.data, function (i, match) {
        console.log(data)
        let s1 = match.score && match.score[0] ? match.score[0] : { r: 0, w: 0, o: 0 };
        let s2 = match.score && match.score[1] ? match.score[1] : { r: 0, w: 0, o: 0 };

        txt += `<tr>
            <td>${match.date}</td>
            <td>${match.name}</td>
            <td>${match.status}</td>
            <td>${match.venue}</td>
            <td>${match.teams[0]} <br> R: ${s1.r} W: ${s1.w} O: ${s1.o}</td>
            <td>${match.teams[1]} <br> R: ${s2.r} W: ${s2.w} O: ${s2.o}</td>
        </tr>`;
    });

    $('#result').append(txt);
})}

