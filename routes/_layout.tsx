import { asset } from "$fresh/runtime.ts";

import { Head } from "$fresh/runtime.ts";

import { PageProps } from "$fresh/server.ts";

export default function Layout({ Component, state }: PageProps) {
  // do something with state here
  return (
    <>
    <Head>
      <link rel="icon" type="image/png" href="/favicon.png" />
    </Head>
    <Component />
  </>
  );
}