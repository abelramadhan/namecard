import React from "react";
import CardModel from "@/components/models/CardModel";
import themes from "@/utils/theme-registry";
import { isValidTheme } from "@/utils/theme-utiils";
import CanvasWrapper from "@/components/models/CanvasWrapper";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";

type Props = { params: { name: string } };

const getUserDetail = async (name: string) => {
  const cookie = cookies();
  const supabase = createClient(cookie);
  return await supabase
    .from("user-detail")
    .select()
    .eq("username", name)
    .single();
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const response = await getUserDetail(params.name);
  const data = response.data;

  return {
    title: `${data?.name} - ${data?.title}`,
  };
}

export default async function Page({ params }: Props) {
  const response = await getUserDetail(params.name);

  const input = response.data;
  if (!input) return redirect("/");

  const theme = themes.find((theme) => theme.name === input.theme);
  const components = isValidTheme(await theme?.getComponents());
  if (!components) return redirect("/");

  return (
    <div className="h-[100dvh] w-[100dvw] flex items-center justify-center overflow-clip">
      <components.Backdrop>
        <CanvasWrapper>
          <CardModel
            front={<components.Front {...input} />}
            back={<components.Back {...input} />}
            color={components.ModelColor}
          />
        </CanvasWrapper>
      </components.Backdrop>
    </div>
  );
}
