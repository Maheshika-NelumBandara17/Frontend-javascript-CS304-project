import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import NavBar from './Navigation';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getVideos } from '../common/actions/common.action';
import { useNavigate } from 'react-router-dom';

const one= new URL("../images/one.jpg", import.meta.url)
const two = new URL("../images/three.jpg", import.meta.url)
const three= new URL("../images/5.png", import.meta.url)

function GroupExample() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getVideos())
  },[]);
  return (
    <>
    <NavBar/>
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={one} />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
          As per the concept, any civilians can upload live videos of traffic violations via this web application where he notices such violations or breaking traffic rules in any location. At the same time someone upload such live video, he is optionally requested to choose the offence, to which the violation action is subjected, out of the traffic violations tabulated inside the web application interface, which is also indicated as a sample below References page, and the location, time, and date of the incident are observed by web application. 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">----</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={two} />
        <Card.Body>
          <Card.Title></Card.Title>
          <button className="home-btn" onClick={() => {navigate("/Login")}} >Get Started</button>
          <Card.Text>
          The operational team appointed to carry out further investigations into the incidents identified through this web application verify the violation and take necessary legal action against the victim. Only this account holders are eligible to provide video footages and responsible for every single video footage uploaded through their own accounts. Further, to avoid misuses of this web application, password and username-based logging method is adopted.


          Though the identification/details of video providing account holders are not exposed to any party in this process to ensure the security, the state of the process of legal action against particular incident is better to be made visible to those who provide video footage related to that incident in order to maintain and enhance the transparency of this process.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={three} />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
          Later, once any victim is fined after confirming the violence, Those who provided the video footage related to the incident is paid a percentage of fine amount through this web application as motivation.


          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </>
  );
}

export default GroupExample;