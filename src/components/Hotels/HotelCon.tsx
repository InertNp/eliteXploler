import { Empty, Pagination } from "antd";
import HotelList from "./HotelList";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../../api/url";

interface props {
  id: string;
}

const HotelCon = ({ id }: props) => {
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [data, setData] = useState([] || null);
  const [place, setPlace] = useState("");
  const [empty, setEmpty] = useState(false);
  useEffect(() => {
    axios.get(`${url}/hotel?page=${page}&size=6&id=${id}`).then((e) => {
      setData(e.data.data.content);
      setTotal(e.data.data.totalElements || 0);

      setEmpty(e.data.data.empty);
    });
    axios.get(`${url}/places/id/${id}`).then((e) => {
      setPlace(e.data.data.placeName);
    });
  }, []);
  return (
    <>
      <div className="w-full">
        <h1 className="text-center m-0 p-0">Hotels In {place}</h1>
      </div>
      <div className="flex flex-wrap gap-8 justify-center mt-2">
        {data.map((item, index) => {
          return <HotelList item={item} key={index} />;
        })}
      </div>
      {empty ? <Empty /> : null}
      <div className="w-full flex justify-center my-5">
        <Pagination
          current={page + 1}
          onChange={(e) => {
            setPage(e - 1);
          }}
          hideOnSinglePage
          defaultCurrent={1}
          pageSize={6}
          total={total}
        />
      </div>
    </>
  );
};

export default HotelCon;
