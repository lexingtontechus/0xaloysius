import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="flex items-center">
      {theme === "light" ? (
        <button
          onClick={() => setTheme("dark")}
          className="rounded-full outline-none focus:outline-none"
        >
          <span className="sr-only">Dark Mode</span>
          <Surf />
        </button>
      ) : (
        <button
          onClick={() => setTheme("light")}
          className="rounded-full outline-none focus:outline-none"
        >
          <span className="sr-only">Light Mode</span>
          <Beach />
        </button>
      )}
    </div>
  );
};

function Surf() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 75.98832096404249"
      width="20"
      height="20"
      className="fill-truePurple-900"
    >
      <g transform="translate(-19.960103779492492, -31.96757392591492) scale(1.399212643983691)">
        <g xmlns="http://www.w3.org/2000/svg">
          <path d="M69.358,22.851c-0.365,0.056-0.646,0.453-0.646,0.82v3.877c-2.392,0.169-4.53,1.16-6.247,2.631l-2.757-2.773   c-0.197-0.198-0.479-0.283-0.76-0.227c-0.563,0.142-0.788,0.991-0.366,1.387l2.729,2.745c-1.491,1.727-2.448,3.905-2.616,6.311   H54.84c-0.028,0-0.056,0-0.084,0c-0.422,0.028-0.788,0.424-0.76,0.849c0.028,0.425,0.45,0.764,0.844,0.736h3.855   c0.168,2.434,1.125,4.613,2.616,6.339l-2.729,2.745c-0.337,0.283-0.365,0.877-0.056,1.188c0.31,0.312,0.9,0.283,1.182-0.057   l2.729-2.745c1.716,1.471,3.883,2.434,6.274,2.603v3.905c0,0.425,0.394,0.792,0.815,0.792s0.788-0.367,0.788-0.792V49.28   c2.392-0.169,4.586-1.132,6.303-2.603l2.729,2.745c0.281,0.34,0.872,0.368,1.182,0.057c0.31-0.311,0.281-0.905-0.057-1.188   l-2.757-2.773c1.491-1.726,2.447-3.905,2.616-6.311h3.883c0.422,0,0.788-0.368,0.788-0.792c0-0.425-0.366-0.792-0.788-0.792h-3.883   c-0.169-2.405-1.125-4.584-2.589-6.311l2.729-2.745c0.479-0.481,0-1.5-0.675-1.387c-0.169,0.028-0.31,0.113-0.45,0.227   l-2.729,2.745c-1.717-1.471-3.911-2.434-6.303-2.603v-3.877c0-0.453-0.422-0.877-0.872-0.82   C69.415,22.851,69.387,22.851,69.358,22.851L69.358,22.851z M69.527,29.104c5.121,0,9.258,4.16,9.258,9.31   c0,5.15-4.137,9.338-9.258,9.338c-5.148,0-9.285-4.188-9.285-9.338C60.242,33.264,64.379,29.104,69.527,29.104L69.527,29.104z    M26.704,41.329c-0.9,0-1.745,0.198-2.476,0.623c-1.492,0.877-2.336,2.49-2.674,4.556c-0.365,2.038-0.253,4.527,0.281,7.356   c1.07,5.632,3.742,12.649,7.822,19.724c0.366,0.679,0.788,1.33,1.182,1.952h-15.7c-0.056,0-0.112,0-0.169,0   c-0.422,0.057-0.731,0.481-0.703,0.906c0.057,0.424,0.479,0.735,0.872,0.707h69.78c0.422,0,0.815-0.368,0.815-0.792   c0-0.425-0.394-0.821-0.815-0.821H54.644c-1.407-4.074-3.377-8.546-5.937-13.045c-3.545-6.169-7.597-11.432-11.424-15.138   C33.428,43.621,29.798,41.357,26.704,41.329L26.704,41.329z M26.704,42.941c2.279,0,5.769,1.953,9.482,5.546   c3.714,3.593,7.653,8.744,11.142,14.828c2.42,4.216,4.305,8.376,5.656,12.224H44.43L25.748,43.026   C26.056,42.941,26.367,42.913,26.704,42.941L26.704,42.941z M24.369,43.819l18.176,31.72h-9.819   c-0.591-0.905-1.153-1.811-1.688-2.744c-3.995-6.962-6.612-13.81-7.625-19.214c-0.506-2.716-0.591-5.065-0.31-6.819   C23.328,45.432,23.75,44.469,24.369,43.819L24.369,43.819z" />
        </g>
      </g>
    </svg>
  );
}
function Beach() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 99.71349821261099"
      width="20"
      height="20"
      className="fill-yellow-300"
    >
      <g transform="translate(-12.471372658429047, -12.589376587183173) scale(1.2472138655103955)">
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M71.407,31.044l0.525-2.064c0.137-0.535-0.188-1.079-0.723-1.215c-0.53-0.141-1.08,0.187-1.215,0.723l-0.531,2.088  C57.08,27.893,45.08,33.492,41.258,43.923c-0.112,0.304-0.069,0.644,0.115,0.911c0.184,0.267,0.485,0.428,0.81,0.433  c0.994,0.013,1.967,0.14,2.892,0.374h-0.001c3.971,1.012,7.13,3.928,8.05,7.431c0.092,0.352,0.368,0.626,0.721,0.715  c0.351,0.094,0.726-0.019,0.975-0.284c2.42-2.575,6.263-2.508,9.376-1.863l-5.951,23.435c-28.203-1.556-47.202,4.562-47.454,4.646  c-0.523,0.173-0.809,0.738-0.635,1.263c0.173,0.524,0.739,0.809,1.263,0.636c0.247-0.081,18.762-6.026,46.324-4.568L54.76,88.797  c-0.137,0.535,0.188,1.079,0.723,1.216c0.083,0.021,0.165,0.03,0.247,0.03c0.446,0,0.854-0.301,0.968-0.754l3.076-12.114  c8.858,0.578,18.587,1.919,28.921,4.464c0.08,0.021,0.161,0.029,0.24,0.029c0.449,0,0.857-0.305,0.97-0.761  c0.133-0.536-0.195-1.078-0.731-1.21c-10.309-2.539-20.03-3.893-28.899-4.49l5.86-23.075c3.094,0.938,6.552,2.762,7.397,6.3  c0.086,0.361,0.366,0.646,0.727,0.736c0.081,0.021,0.164,0.031,0.246,0.031c0.28,0,0.552-0.118,0.744-0.332  c2.466-2.743,6.684-3.845,10.743-2.814c0.853,0.217,1.708,0.542,2.543,0.965c0.288,0.144,0.627,0.142,0.913-0.005  c0.286-0.149,0.482-0.426,0.528-0.745C91.566,45.252,83.625,34.556,71.407,31.044z M45.567,43.704  C45.567,43.704,45.567,43.704,45.567,43.704c-0.623-0.159-1.263-0.274-1.914-0.347c3.602-7.818,12.918-12.338,22.701-11.271  c-4.151,1.974-7.637,5.563-10.205,10.575c-1.28,2.498-2.096,4.869-2.591,6.6C51.82,46.602,48.99,44.576,45.567,43.704z   M65.663,49.925c-1.747-0.445-3.374-0.666-4.865-0.666c-2.137,0-3.994,0.457-5.529,1.356C56.381,46.37,60.151,35.5,69.947,32.89  c7.312,6.931,5.502,18.211,4.456,22.526C72.822,52.87,69.859,50.992,65.663,49.925z M88.137,54.652  c-0.548-0.215-1.1-0.394-1.652-0.534c-3.521-0.896-7.152-0.388-10.007,1.253c0.407-1.768,0.861-4.351,0.932-7.3  c0.135-5.645-1.221-10.474-3.94-14.197C82.751,37.587,88.73,45.905,88.137,54.652z"
        />
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M33.978,26.455c0-4.262-3.463-7.729-7.72-7.729s-7.72,3.467-7.72,7.729c0,4.261,3.463,7.728,7.72,7.728  S33.978,30.715,33.978,26.455z M26.258,32.182c-3.154,0-5.72-2.569-5.72-5.728c0-3.159,2.565-5.729,5.72-5.729  s5.72,2.569,5.72,5.729C31.978,29.613,29.412,32.182,26.258,32.182z"
        />
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M27.258,14.319v-3.225c0-0.553-0.447-1-1-1s-1,0.447-1,1v3.225c0,0.553,0.447,1,1,1S27.258,14.872,27.258,14.319z"
        />
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M21.328,16.368c0.136,0,0.273-0.027,0.405-0.086c0.505-0.225,0.731-0.815,0.508-1.32l-1.31-2.945  c-0.225-0.505-0.814-0.73-1.32-0.508c-0.505,0.225-0.731,0.815-0.508,1.32l1.31,2.945C20.579,16.147,20.944,16.368,21.328,16.368z"
        />
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M17.25,19.334c0.273,0,0.545-0.111,0.743-0.33c0.369-0.411,0.337-1.043-0.073-1.413l-2.394-2.157  c-0.41-0.369-1.042-0.338-1.413,0.073c-0.369,0.411-0.337,1.043,0.073,1.413l2.394,2.157C16.771,19.249,17.011,19.334,17.25,19.334z  "
        />
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M10.716,21.398c-0.171,0.525,0.116,1.09,0.642,1.261l3.062,0.996c0.104,0.033,0.207,0.049,0.31,0.049  c0.422,0,0.813-0.269,0.951-0.69c0.171-0.525-0.116-1.09-0.642-1.261l-3.062-0.996C11.448,20.587,10.887,20.874,10.716,21.398z"
        />
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M10.999,29.06c0.035,0,0.07-0.002,0.105-0.006l3.202-0.338c0.55-0.058,0.948-0.55,0.89-1.099  c-0.058-0.55-0.558-0.955-1.099-0.89l-3.202,0.338c-0.55,0.058-0.948,0.55-0.89,1.099C10.06,28.678,10.493,29.06,10.999,29.06z"
        />
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M12.106,34.635c0.185,0.32,0.521,0.499,0.866,0.499c0.17,0,0.342-0.043,0.5-0.135l2.788-1.612  c0.478-0.276,0.642-0.888,0.364-1.366c-0.275-0.479-0.887-0.644-1.366-0.364l-2.788,1.612  C11.993,33.545,11.829,34.157,12.106,34.635z"
        />
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M17.239,39.88c0.31,0,0.614-0.144,0.811-0.413l1.893-2.608c0.324-0.446,0.225-1.072-0.223-1.396  c-0.447-0.326-1.071-0.224-1.396,0.223l-1.893,2.608c-0.324,0.446-0.225,1.072,0.223,1.396C16.83,39.819,17.036,39.88,17.239,39.88z  "
        />
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M22.759,38.117L22.09,41.27c-0.114,0.541,0.23,1.071,0.771,1.187c0.07,0.015,0.141,0.021,0.209,0.021  c0.462,0,0.878-0.322,0.978-0.793l0.669-3.153c0.114-0.54-0.23-1.07-0.771-1.186C23.409,37.233,22.874,37.578,22.759,38.117z"
        />
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M28.571,37.346c-0.541,0.115-0.886,0.646-0.771,1.186l0.669,3.153c0.1,0.471,0.516,0.793,0.978,0.793  c0.068,0,0.139-0.007,0.209-0.021c0.54-0.115,0.885-0.646,0.771-1.187l-0.669-3.153C29.643,37.578,29.108,37.232,28.571,37.346z"
        />
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M34.466,39.467c0.196,0.27,0.501,0.413,0.811,0.413c0.203,0,0.409-0.062,0.586-0.19c0.447-0.324,0.547-0.95,0.223-1.396  l-1.893-2.608c-0.325-0.446-0.95-0.548-1.396-0.223c-0.447,0.324-0.547,0.95-0.223,1.396L34.466,39.467z"
        />
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M39.543,35.134c0.346,0,0.682-0.179,0.867-0.5c0.276-0.478,0.112-1.089-0.366-1.366l-2.789-1.612  c-0.479-0.276-1.09-0.113-1.366,0.366c-0.276,0.478-0.112,1.089,0.366,1.366l2.789,1.612C39.201,35.091,39.373,35.134,39.543,35.134  z"
        />
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M41.517,29.06c0.506,0,0.939-0.382,0.993-0.896c0.059-0.549-0.34-1.041-0.89-1.099l-3.203-0.338  c-0.544-0.064-1.041,0.34-1.099,0.89c-0.059,0.549,0.34,1.041,0.89,1.099l3.203,0.338C41.446,29.058,41.481,29.06,41.517,29.06z"
        />
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M36.835,23.013c0.138,0.422,0.529,0.69,0.951,0.69c0.103,0,0.207-0.016,0.31-0.049l3.062-0.996  c0.525-0.171,0.812-0.735,0.642-1.261c-0.171-0.524-0.737-0.812-1.261-0.642l-3.062,0.996  C36.951,21.923,36.664,22.488,36.835,23.013z"
        />
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M36.989,15.433l-2.394,2.157c-0.41,0.37-0.442,1.002-0.073,1.413c0.198,0.219,0.47,0.33,0.743,0.33  c0.239,0,0.479-0.085,0.67-0.257l2.394-2.157c0.41-0.37,0.442-1.002,0.073-1.413C38.029,15.095,37.398,15.064,36.989,15.433z"
        />
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M31.188,16.368c0.384,0,0.749-0.221,0.915-0.594l1.31-2.945c0.224-0.505-0.003-1.096-0.508-1.32  c-0.503-0.223-1.096,0.003-1.32,0.508l-1.31,2.945c-0.224,0.505,0.003,1.096,0.508,1.32C30.914,16.34,31.052,16.368,31.188,16.368z"
        />
      </g>
    </svg>
  );
}

export default ThemeChanger;
