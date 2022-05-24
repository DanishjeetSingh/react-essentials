import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>[Company Website]</h1>
      <nav>
          <Link to='about'>About</Link> <br/>
          <Link to='events'>Events</Link> <br/>
          <Link to='contact'>Contact</Link>
      </nav>
    </div>
  );
}

export function About() {
  return (
    <div>
      <h1>[About]</h1>
      <nav>
          <Link to='services'>Services</Link> <br/>
          <Link to='history'>Company History</Link> <br/>
      </nav>
      <Outlet/>
    </div>
  );
}

export function Services() {
    return (
      <div>
        <h2>Our Services</h2>
      </div>
    );
  }

export function CompanyHistory() {
    return (
      <div>
        <h2>Our Company History</h2>
      </div>
    );
  }

export function Location() {
    return (
      <div>
        <h2>Our Services</h2>
      </div>
    );
  }
  
export function Events() {
  return (
    <div>
      <h1>[Events]</h1>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <h1>[Contact]</h1>
    </div>
  );
}

export function Error404() {
    const location = useLocation()
    return(
        <div>
            <h1>
                Error 404
            </h1>
            <p>
               Resource not found at {location.pathname}
            </p>
        </div>
    )
}