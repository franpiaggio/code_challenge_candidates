import { Button, Flex, Input } from "@chakra-ui/react";
import { FilterType } from "../views/Candidates";
import { Dispatch, SetStateAction, memo, useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";

interface FiltersProps {
  selected: string | null;
  onFilterSelect: Dispatch<SetStateAction<FilterType>>;
  setSearchFilter: Dispatch<SetStateAction<string>>;
}

const filters: FilterType[] = ["rejected", "approved", null];

function Filters({ selected, onFilterSelect, setSearchFilter }: FiltersProps) {
  const [value, setValue] = useState<string>("");
  const searchFilterDebounce = useDebounce<string>(value, 200);

  useEffect(() => {
    setSearchFilter(searchFilterDebounce);
  }, [searchFilterDebounce]);

  return (
    <Flex justify={"end"} marginBottom={"3"}>
      <Input
        value={value}
        placeholder='Search by keyword...'
        type='text'
        onChange={(e) => setValue(e.target.value)}
        marginRight='5'
      />
      {filters.map((filter) => (
        <Button
          key={filter}
          textTransform={"capitalize"}
          variant={selected === filter ? "solid" : "outline"}
          onClick={() => onFilterSelect(filter)}
          marginLeft='2'
        >
          {filter || "All"}
        </Button>
      ))}
    </Flex>
  );
}

export default memo(Filters);
