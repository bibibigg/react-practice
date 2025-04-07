import { Suspense } from "react";
import { redirect, useRouteLoaderData, Await } from "react-router-dom";

import EventItem from "../components/EventItem";
import EventList from "../components/EventsList";

function EventDetailPage() {
  const { event, events } = useRouteLoaderData("event-detail");
  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={event}>
          {(loaderEvent) => <EventItem event={loaderEvent} />}
        </Await>
        <Await resolve={events}>
          {(loaderEvents) => <EventList events={loaderEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

export default EventDetailPage;

async function loaderEvent(id) {
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw Response.json(
      { message: "Could not fetch detail for selected events!" },
      { status: 500 }
    );
  } else {
    const resData = await response.json();
    return resData.event;
  }
}

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // throw new Response(JSON.stringify({ message: "Could not fetch events!" }), {
    //   status: 500,
    // });
    throw Response.json(
      { message: "Could not fetch events!" },
      { status: 500 }
    );
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

export async function loader({ params }) {
  const id = params.someId;
  return { event: loaderEvent(id), events: loadEvents() };
}

export async function action({ request, params }) {
  const id = params.someId;
  const response = await fetch("http://localhost:8080/events/" + id, {
    method: request.method,
  });

  if (!response.ok) {
    throw Response.json(
      { message: "Could not delete event!" },
      { status: 500 }
    );
  }
  return redirect("/events");
}
