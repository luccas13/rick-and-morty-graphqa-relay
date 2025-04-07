import { useState } from 'react';
import { Button, List, ListItem, ListItemSubtitle, ListItemTitle } from '@/components';
import { useQuery } from '@tanstack/react-query';
import { getAllLocations } from '@/api/location';

const DEFAULT_PARAMS = { page: 1 };

export const LocationsList = () => {
  const [params, setParams] = useState(DEFAULT_PARAMS);

  const { data } = useQuery({
    queryKey: ['locations', params],
    queryFn: () => getAllLocations(params.page)
  });

  const onChangePrev = () => {
    if (!data || !data?.info?.prev) return;

    setParams((preValue) => ({ ...preValue, page: preValue.page - 1 }));
  };

  const onChangeNext = () => {
    if (!data || !data?.info?.next) return;

    setParams((preValue) => ({ ...preValue, page: preValue.page + 1 }));
  };

  return (
    <main className="flex flex-col gap-12 py-5 h-9/10 justify-between">
      <div className="flex flex-col gap-4 text-center h-full justify-between">
        <h2 className="text-2xl font-black text-primary sm:text-5xl">Locations</h2>
        <div className="flex flex-wrap justify-center gap-2 h-10/10 overflow-auto">
          <List direction="vertical" className="w-6/12 justify-center">
            {data?.results?.map((location) => {
              return (
                <ListItem key={location?.id}>
                  <ListItemTitle>{location?.name}</ListItemTitle>
                  <ListItemSubtitle>
                    {location?.type} - {location?.dimension}
                  </ListItemSubtitle>
                </ListItem>
              );
            })}
          </List>
        </div>
        <List direction="horizontal" className="w-full justify-center">
          <Button className="hover:cursor-pointer" onClick={onChangePrev}>
            Prev
          </Button>
          <Button className="hover:cursor-pointer" onClick={onChangeNext}>
            Next
          </Button>
        </List>
      </div>
    </main>
  );
};
