import { useState } from "react"
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover"
import { Button } from "./ui/button"
import { ChevronsUpDown, Check } from "lucide-react"
import { Command, CommandInput, CommandList, CommandEmpty, CommandItem, CommandGroup } from "./ui/command"
import { cn } from "@/lib/utils"

interface OptionProps {
    value: string,
    label: string,
}

interface FilterBoxProps {
    category: string,
    options: OptionProps[],
    onChange?: (category: string, value: string) => void;
}

export const FilterBox = ( {
    category,
    options,
    onChange,
} : FilterBoxProps ) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className={cn(
                    "w-[150px] justify-between rounded-md",
                    value ? "text-[#3E6652] font-semibold" : "text-gray-400"
                )}
                >
                {value
                    ? options.find((option) => option.value === value)?.label
                    : `${category}`}
                <ChevronsUpDown className="opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                <CommandInput placeholder={`Select ${category}`} className="h-9 text-sm" />
                <CommandList>
                    <CommandEmpty>No {category} found.</CommandEmpty>
                    <CommandGroup>
                    {options.map((option) => (
                        <CommandItem
                        key={option.value}
                        value={option.value}
                        onSelect={(currentValue) => {
                            const newValue = currentValue === value ? "" : currentValue;
                            setValue(newValue);
                            setOpen(false);
                            if (onChange) {
                                onChange(category.toLowerCase(), newValue);
                            }
                        }}

                        >
                        {option.label}
                        <Check
                            className={cn(
                            "ml-auto",
                            value === option.value ? "opacity-100" : "opacity-0"
                            )}
                        />
                        </CommandItem>
                    ))}
                    </CommandGroup>
                </CommandList>
                </Command>
            </PopoverContent>
    </Popover>
    )
}