import pro1 from '../assets/Imageeditor.png';
import pro2 from '../assets/TemperatureConverter.jpg';
import pro3 from '../assets/TicTacToe.jpg';

const ProjectCardData = [

    {
        imgsrc: pro1,
        title: "Image Editor",
        text:
            <>
                <p> HTML | CSS | JavaScript</p>
                <p style={{ textDecoration: "underline" }}>About</p>
                <p>
                    <ul>
                        <li style={{ margin: "8px 0px" }}>Includes various filters such as brightness, contrast, saturation, and blur.  </li>
                        <li style={{ margin: "8px 0px" }}>Also has features for rotating and flipping images using JavaScript.</li>
                        <li style={{ margin: "8px 0px" }}>Through this project, I gained a deeper understanding of CSS filters and their applications in web development.</li>
                    </ul>
                </p>
            </>
        ,
        view: "https://imageeditorrr.netlify.app/",
        score: "https://github.com/Ankit-KumarP/Projects/tree/main/imgEditor"
    },
    {
        imgsrc: pro2,
        title: "Temperature Converter",
        text:
            <>
                <p> JQuery | JavaScript </p>
                <p style={{ textDecoration: "underline" }}>About</p>
                <p>
                    <ul>
                        <li style={{ margin: "8px 0px" }}>It can convert temperatures between Celsius, Fahrenheit, and Kelvin scales.</li>
                        <li style={{ margin: "8px 0px" }}>Developed using JavaScript and jQuery programming concepts.</li>
                        <li style={{ margin: "8px 0px" }}>Project helped me to gain practical experienceme and to enhance my skills in web development and programming logic.</li>
                    </ul>
                </p>
            </>
        ,
        view: "https://oibsitemperatureconverter.netlify.app/",
        score: "https://github.com/Ankit-KumarP/OIBSIP/tree/main/TemperatureConverter"
    },
    {

        imgsrc: pro3,
        title: "TicTacToe",
        text:
            <>
                <p>CSS | Bootstrap | JavaScript</p>
                <p style={{ textDecoration: "underline" }}>About</p>
                <p>
                    <ul>
                        <li style={{ margin: "8px 0px" }}>Played by two players who take turns drawing either an 'O' or an 'X' in a 3x3 grid of squares.</li>
                        <li style={{ margin: "8px 0px" }}>With concepts of CSS grid and flexbox, created an intuitive game interface.</li>
                        <li style={{ margin: "8px 0px" }}>
                            Gained practical skills in working with CSS concepts and and framework Bootstrap.</li>
                    </ul>
                </p>
            </>
        ,
        view: "https://tictactoenoww.netlify.app/",
        score: "https://github.com/Ankit-KumarP/Projects/tree/main/TicTacToe"
    }
];

export default ProjectCardData;