import {
  useParams,
  redirect,
  useNavigation,
  Link,
  useNavigate,
  useSubmit,
} from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {} from "react-router-dom";
import { fetchEvent, updateEvent, queryClient } from "../../util/http.js";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EditEvent() {
  const navigate = useNavigate();
  const submit = useSubmit();
  const { state } = useNavigation();
  const params = useParams();
  console.log(params.id);

  const { data, isError, error } = useQuery({
    queryKey: ["events", params.id],
    queryFn: ({ signal }) => fetchEvent({ id: params.id, signal }),
    staleTime: 1000 * 5,
  });

  // const { mutate } = useMutation({
  //   mutationFn: updateEvent,
  //   onSuccess: () => {
  //     navigate("../");
  //   },
  //   // 낙관적 업데이트 시도
  //   onMutate: async (data) => {
  //     const newEvent = data.event;
  //     await queryClient.cancelQueries({ queryKey: ["events", params.id] });
  //     const previousEvent = queryClient.getQueryData(["events", params.id]);
  //     queryClient.setQueryData(["events", params.id], newEvent);

  //     return { previousEvent: previousEvent };
  //   },
  //   // 낙관적 업데이트가 실패했을 때 롤백
  //   onError: (error, data, context) => {
  //     queryClient.setQueryData(["events", params.id], context.previousEvent);
  //   },
  //   // 성공 여부를 떠나 쿼리 무효화로 데이터 동기화
  //   onSettled: () => {
  //     queryClient.invalidateQueries({ queryKey: ["events", params.id] });
  //   },
  // });

  function handleSubmit(formData) {
    // mutate({ id: params.id, event: formData });
    submit(formData, {
      method: "PUT",
    });
  }

  function handleClose() {
    navigate("../");
  }

  let content;

  // if (isPending) {
  //   content = (
  //     <div className="center">
  //       <LoadingIndicator />
  //     </div>
  //   );
  // }

  if (isError) {
    content = (
      <>
        <ErrorBlock
          title="Failed to load event"
          message={error.info?.message || "Failed to load event"}
        />
        <div className="form-actions">
          <Link to="../" className="button">
            Okay
          </Link>
        </div>
      </>
    );
  }

  if (data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        {state === "submitting" ? (
          <p>sending data...</p>
        ) : (
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Update
            </button>
          </>
        )}
      </EventForm>
    );
  }

  return <Modal onClose={handleClose}>{content}</Modal>;
}

export function loader({ params }) {
  return queryClient.fetchQuery({
    queryKey: ["events", params.id],
    queryFn: ({ signal }) => fetchEvent({ id: params.id, signal }),
  });
}

export async function action({ params, request }) {
  const formData = await request.formData();
  const updateEventData = Object.fromEntries(formData);
  await updateEvent({ id: params.id, event: updateEventData });
  await queryClient.invalidateQueries({ queryKey: ["events"] });
  return redirect("../");
}
