import { useFacetsState } from "@/context/facets";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import React, { useEffect, useState } from "react";
import {
  FacetsFacetActivate,
  FacetsFacetContent,
  FacetsFacetHeader,
  FacetsFacetStyled,
} from "./Facet.styled";
import FacetsOption from "./Option";

interface FacetsFacetProps {
  label: string;
  slug: string;
  values: any;
}

export const FacetsFacet: React.FC<FacetsFacetProps> = ({
  label,
  slug,
  values,
}) => {
  const { facetsState } = useFacetsState();
  const { facetsActive } = facetsState;

  /**
   *
   */
  const params = facetsActive?.toString();
  const defaultValue = {
    slug: "",
    value: "Any",
  };

  const [active, setActive] = useState({
    slug: "",
    value: "Any",
  });

  useEffect(() => {
    const activeSlug = facetsActive?.get(slug);
    setActive(
      activeSlug
        ? {
            slug: activeSlug,
            value: values.find((entry: any) => entry.slug === activeSlug)
              ?.value,
          }
        : defaultValue
    );
  }, [facetsActive, params, slug, values]);

  return (
    <FacetsFacetStyled value={slug}>
      <FacetsFacetHeader asChild>
        <FacetsFacetActivate>
          <span>
            {label} <ChevronDownIcon />
          </span>
          <span>{active.value}</span>
        </FacetsFacetActivate>
      </FacetsFacetHeader>
      <FacetsFacetContent>
        {values.map((option: any, index: number) => {
          const identifier = `${slug}-${option.slug}-${index}`;
          return (
            <FacetsOption
              active={active.slug === option.slug}
              facet={slug}
              key={identifier}
              identifier={identifier}
              option={option}
            />
          );
        })}
      </FacetsFacetContent>
    </FacetsFacetStyled>
  );
};

export default FacetsFacet;
