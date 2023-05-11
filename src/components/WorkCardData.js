import pro1 from '../assets/SOA.jpg';
import pro2 from '../assets/SRPublic.png';
import pro3 from '../assets/NPS.png';
// Array of objects, (Array of project card data)
const ProjectCardData = [

    {
        imgsrc: pro1,
        title: "Bachelor of Technology",
        text:
            <>
                <p>Computer Science & Information Techonology <i>( 8.82 CGPA )</i>  </p>
                <p style={{ textDecoration: "underline" }}>Subject Of Intrest</p>
                <p>
                    <ul>
                        <li>Operating system</li>
                        <li>Database management</li>
                        <li>Computer networking</li>
                        <li>Data structure & algrothim</li>
                    </ul>
                </p>
            </>
        ,
        view: "https://www.soa.ac.in/",
        score: "https://drive.google.com/file/d/1qxXo8nhUL6xFGGxTP2dVG_OEG392doN5/view?usp=sharing"
    },
    {
        imgsrc: pro2,
        title: "Inter 2nd Year",
        text:
            <>
                <p>Science : Mathamatics</p>
                <p style={{ textDecoration: "underline" }}>About</p>
                <p>
                    <ul>
                        <li>SR Public School</li>
                        <li>CBSE</li>
                        <li>Aff. Code : 330551</li>
                        <li>Gopalpur, Bikram, Patna.</li>
                        <li>Patna - 801104, Bihar.</li>
                    </ul>
                </p>
            </>
        ,
        view: "https://www.cbseschool.org/s-r-public-school-patna-bihar/",
        score: "https://drive.google.com/file/d/1OLmDTdgfiwOqaSE2fzhYG5RhcxKhpMS_/view"
    },
    {

        imgsrc: pro3,
        title: "Matriculation",
        text:
            <>
                <p>Nath Public School</p>
                <p style={{ textDecoration: "underline" }}>About</p>
                <p>
                    <ul>
                        <li>Nath Public School</li>
                        <li>CBSE</li>
                        <li>Aff. Code : 330568</li>
                        <li>Near D.M. Office</li>
                        <li>Lakhisarai - 811311, Bihar.</li>
                    </ul>
                </p>
            </>
        ,
        view: "https://nathpublicschool.com/",
        score: "https://drive.google.com/file/d/10liSdcosRxXAu4V3W4W-Tqiz2kXO4Cp2/view"
    }
];

export default ProjectCardData;