const fs = require('fs')

const data = atob("PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KPGhlYWQ+CiAgICA8bWV0YSBjaGFyc2V0PSJVVEYtOCIgLz4KICAgIDxtZXRhIG5hbWU9InZpZXdwb3J0IiBjb250ZW50PSJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wIiAvPgogICAgPHRpdGxlPkRldnRvb2xzPC90aXRsZT4KPC9oZWFkPgo8Ym9keT4KICAgIDxkaXYgY2xhc3M9Im1haW4iPgogICAgICAgIDxkaXYgY2xhc3M9ImhlYWRlciI+CiAgICAgICAgICAgIDxoMT5maWVyY2VzIG1hZ2ljIHJpZ2dpbmc8L2gxPgogICAgICAgIDwvZGl2PgogICAgICAgIDxwPgogICAgICAgICAgICBQcmVzcyBRIGZvciBldmFsdWF0aW5nIGNvZGUgdW5kZXIKICAgICAgICAgICAgPGEgY2xhc3M9ImJ1dHRvbiIgaWQ9ImV4dGRiZyIgaHJlZj0iamF2YXNjcmlwdDp2b2lkKDApIj5leHRlbnNpb24gaWQ8L2E+CiAgICAgICAgPC9wPgogICAgICAgIDxwPk9yIHByZXNzIDEtOSBmb3Igc29tZSBoYXJkY29kZWQgZXh0ZW5zaW9uczwvcD4KICAgICAgICA8cD4KICAgICAgICAgICAgPGEgY2xhc3M9ImJ1dHRvbiBoYXJkY29kZWQiIGV4dD0iYWRrY3BrcGdoYWhtYm9wa2pjaG9iaWVja2VvYW9lZW0iIGhyZWY9ImphdmFzY3JpcHQ6dm9pZCgwKSI+bHMgZmlsdGVyPC9hPgogICAgICAgICAgICA8YSBjbGFzcz0iYnV0dG9uIGhhcmRjb2RlZCIgZXh0PSJocGtkb2tha2pnbHBwZWVrZmVla21lYmZhaGFkbmZscCIgaHJlZj0iamF2YXNjcmlwdDp2b2lkKDApIj5scyBhbGVydDwvYT4KICAgICAgICAgICAgPGEgY2xhc3M9ImJ1dHRvbiBoYXJkY29kZWQiIGV4dD0iaGFsZGxnbGRwbGduZ2dramFhZmhlbGdpYWdsYWZhbmgiIGhyZWY9ImphdmFzY3JpcHQ6dm9pZCgwKSI+Z29ndWFyZGlhbjwvYT4KICAgICAgICAgICAgPGEgY2xhc3M9ImJ1dHRvbiBoYXJkY29kZWQiIGV4dD0ibW9laGtiYmNia2xta2NqaWJjYmJvb2ViZ3BvZ2Vqb2MiIGhyZWY9ImphdmFzY3JpcHQ6dm9pZCgwKSI+YXJpc3RvdGxlPC9hPgogICAgICAgICAgICA8YSBjbGFzcz0iYnV0dG9uIGhhcmRjb2RlZCIgZXh0PSJrbWZmZWhiaWRsYWxpYmZla2xhZWZuY2twaWRib2RmZiIgaHJlZj0iamF2YXNjcmlwdDp2b2lkKDApIj5pYm9zczwvYT4KICAgICAgICAgICAgPGEgY2xhc3M9ImJ1dHRvbiBoYXJkY29kZWQiIGV4dD0ibWxvYWpmbm1qY2tmamJlZW9mY2RhZWNiZWxuYmxkZW4iIGhyZWY9ImphdmFzY3JpcHQ6dm9pZCgwKSI+c25hcCZyZWFkPC9hPgogICAgICAgICAgICA8YSBjbGFzcz0iYnV0dG9uIGhhcmRjb2RlZCIgZXh0PSJmb2dqZWFuamZiaW9tYmdobm1rbW1vcGhmZWNjamRraSIgaHJlZj0iamF2YXNjcmlwdDp2b2lkKDApIj5sb2NrZG93biBicm93c2VyPC9hPgogICAgICAgICAgICA8YSBjbGFzcz0iYnV0dG9uIGhhcmRjb2RlZCIgZXh0PSJrbXBqbGlsbmVtamNpb2hqY2tqYWRtZ21pY29sZGdsZiIgaHJlZj0iamF2YXNjcmlwdDp2b2lkKDApIj5keWtub3cgY2xvdWQ8L2E+CiAgICAgICAgICAgIDxhIGNsYXNzPSJidXR0b24gaGFyZGNvZGVkIiBleHQ9ImduZG1oZGNlZmJobGNoa2hpcGNubmJrY21pY25jZWhrIiBocmVmPSJqYXZhc2NyaXB0OnZvaWQoMCkiPkdGb3JtcyBMb2NrZWQgTW9kZSAob24gYWxsIGVucm9sbGVkIGNicyk8L2E+CiAgICAgICAgPC9wPgogICAgICAgIDxwPgogICAgICAgICAgICBQcmVzcyBNIGZvciBldmFsdWF0aW5nIHVuZGVyCiAgICAgICAgICAgIDxhIGNsYXNzPSJidXR0b24iIGlkPSJkZXZkYmciIGhyZWY9ImphdmFzY3JpcHQ6dm9pZCgwKSI+ZGV2dG9vbHMgY29udGV4dDwvYT4KICAgICAgICA8L3A+CiAgICAgICAgPHA+VHlwaW5nIGNhbmNlbCBpbiBhbnkgcHJvbXB0IHdpbGwgY2FuY2VsIHRoZSBjdXJyZW50IG9wZXJhdGlvbi48L3A+CgogICAgICAgIDxhIGNsYXNzPSJidXR0b24iIGhyZWY9ImRldnRvb2xzOi8vZGV2dG9vbHMvYnVuZGxlZC9kZXZ0b29sc19hcHAuaHRtbD9leHBlcmltZW50cz10cnVlJndzPSUldXBkYXRlcnVybCUlIj5SZS1vcGVuIGRldnRvb2xzPC9hPgogICAgICAgIDxhIGNsYXNzPSJidXR0b24iIGhyZWY9ImphdmFzY3JpcHQ6dm9pZCgwKSIgaWQ9InVwZGF0ZXIiPlVwZGF0ZSBwYXlsb2FkPC9hPgogICAgICAgIDxhIGNsYXNzPSJidXR0b24iIGhyZWY9ImphdmFzY3JpcHQ6dm9pZCgwKSIgaWQ9ImNsZWFudXAiPkNsZWFudXAgYW5kIHJlc2V0IGZvciBleHRlbnNpb248L2E+CiAgICAgICAgPGEgY2xhc3M9ImJ1dHRvbiIgaHJlZj0iamF2YXNjcmlwdDp2b2lkKDApIiBpZD0iYWN0aXZhdGUiPkNocm9tZSBVUkxzPC9hPgogICAgICAgIDxhIGNsYXNzPSJidXR0b24iIGhyZWY9ImphdmFzY3JpcHQ6dm9pZCgwKSIgaWQ9ImFjdGl2YXRlMiI+Q2hyb21lIFVSTHMgMjwvYT4KICAgIDwvZGl2PgoKICAgIDxzdHlsZT4KICAgICAgICBpZnJhbWUgewogICAgICAgICAgICBvcGFjaXR5OiAwOwogICAgICAgICAgICB3aWR0aDogMDsKICAgICAgICAgICAgaGVpZ2h0OiAwOwogICAgICAgIH0KCiAgICAgICAgYm9keSB7CiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIHNhbnMtc2VyaWY7CiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTFlMmU7CiAgICAgICAgICAgIGNvbG9yOiAjY2RkNmY0OwogICAgICAgICAgICBtYXJnaW46IDA7CiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7CiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47CiAgICAgICAgfQoKICAgICAgICBhIHsKICAgICAgICAgICAgY29sb3I6ICNiN2JkZjg7CiAgICAgICAgfQoKICAgICAgICAubWFpbiB7CiAgICAgICAgICAgIHRvcDogNTAlOwogICAgICAgICAgICBsZWZ0OiA1MCU7CiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7CiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMxODE4MjU7CiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOwogICAgICAgICAgICBwYWRkaW5nOiAyJTsKICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4OwogICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxODE4MjU7CiAgICAgICAgICAgIG1heC13aWR0aDogOTB2dzsKICAgICAgICAgICAgbWF4LWhlaWdodDogOTB2aDsKICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87IC8qIEFsbG93cyBzY3JvbGxpbmcgaWYgY29udGVudCBvdmVyZmxvd3MgKi8KICAgICAgICB9CgogICAgICAgIC5oZWFkZXIgewogICAgICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKICAgICAgICB9CgogICAgICAgIGgxIHsKICAgICAgICAgICAgZm9udC1zaXplOiAxLjRlbTsKICAgICAgICAgICAgbWFyZ2luOiAwOwogICAgICAgICAgICBjb2xvcjogI2NkZDZmNDsKICAgICAgICB9CgogICAgICAgIC5idXR0b24gewogICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0NTQ3NWE7CiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM1ODViNzA7CiAgICAgICAgICAgIGNvbG9yOiAjZjhmYWZjOwogICAgICAgICAgICBwYWRkaW5nOiA4cHggMTZweDsKICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOwogICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7CiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsKICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4OwogICAgICAgICAgICBtYXJnaW46IDZweCAwOwogICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7CiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDsKICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsKICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4zcyBlYXNlLWluLW91dCwgdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7CiAgICAgICAgfQoKICAgICAgICAuYnV0dG9uOjpiZWZvcmUsCiAgICAgICAgLmJ1dHRvbjo6YWZ0ZXIgewogICAgICAgICAgICBjb250ZW50OiAnJzsKICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOwogICAgICAgICAgICBoZWlnaHQ6IDEwMCU7CiAgICAgICAgICAgIHdpZHRoOiAwOwogICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpOwogICAgICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjRzIGVhc2UtaW4tb3V0OwogICAgICAgIH0KCiAgICAgICAgLmJ1dHRvbjo6YmVmb3JlIHsKICAgICAgICAgICAgbGVmdDogNTAlOwogICAgICAgIH0KCiAgICAgICAgLmJ1dHRvbjo6YWZ0ZXIgewogICAgICAgICAgICBsZWZ0OiAwOwogICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjYjdiZGY4OwogICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7CiAgICAgICAgICAgIG9wYWNpdHk6IDA7CiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLWluLW91dDsKICAgICAgICB9CgogICAgICAgIC5idXR0b246aG92ZXI6OmJlZm9yZSB7CiAgICAgICAgICAgIHdpZHRoOiAxMDAlOwogICAgICAgICAgICBsZWZ0OiAwOwogICAgICAgIH0KCiAgICAgICAgLmJ1dHRvbjpob3Zlcjo6YWZ0ZXIgewogICAgICAgICAgICBvcGFjaXR5OiAxOwogICAgICAgIH0KCiAgICAgICAgLmJ1dHRvbjpob3ZlciB7CiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODViNzA7CiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzdmODQ5YzsKICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTsKICAgICAgICB9CgogICAgICAgIC5oYXJkY29kZWQgewogICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjM4YmE4OwogICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZjI4ZmFkOwogICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjsKICAgICAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7CiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDsKICAgICAgICAgICAgbWFyZ2luOiA2cHggMDsKICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyOwogICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7CiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47CiAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQsIHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0OwogICAgICAgIH0KCiAgICAgICAgLmhhcmRjb2RlZDo6YmVmb3JlLAogICAgICAgIC5oYXJkY29kZWQ6OmFmdGVyIHsKICAgICAgICAgICAgY29udGVudDogJyc7CiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICAgICAgICAgICAgaGVpZ2h0OiAxMDAlOwogICAgICAgICAgICB3aWR0aDogMDsKICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTsKICAgICAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC40cyBlYXNlLWluLW91dDsKICAgICAgICB9CgogICAgICAgIC5oYXJkY29kZWQ6OmJlZm9yZSB7CiAgICAgICAgICAgIGxlZnQ6IDUwJTsKICAgICAgICB9CgogICAgICAgIC5oYXJkY29kZWQ6OmFmdGVyIHsKICAgICAgICAgICAgbGVmdDogMDsKICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmY2FkNDsKICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4OwogICAgICAgICAgICBvcGFjaXR5OiAwOwogICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1pbi1vdXQ7CiAgICAgICAgfQoKICAgICAgICAuaGFyZGNvZGVkOmhvdmVyOjpiZWZvcmUgewogICAgICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICAgICAgbGVmdDogMDsKICAgICAgICB9CgogICAgICAgIC5oYXJkY29kZWQ6aG92ZXI6OmFmdGVyIHsKICAgICAgICAgICAgb3BhY2l0eTogMTsKICAgICAgICB9CgogICAgICAgIC5oYXJkY29kZWQ6aG92ZXIgewogICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjI4ZmFkOwogICAgICAgICAgICBib3JkZXItY29sb3I6ICNmZmNjZDU7CiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7CiAgICAgICAgfQoKICAgICAgICAjd2F0ZXJtYXJrIHsKICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkOwogICAgICAgICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlOwogICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyOwogICAgICAgICAgICBib3R0b206IDVweDsKICAgICAgICAgICAgcmlnaHQ6IDVweDsKICAgICAgICAgICAgei1pbmRleDogOTk7CiAgICAgICAgICAgIGNvbG9yOiAjZjhmYWZjOwogICAgICAgIH0KICAgIDwvc3R5bGU+CgogICAgPHNjcmlwdCBkZWZlcj4KICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCJrZXlkb3duIiwgZnVuY3Rpb24gKGV2ZW50KSB7CiAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09ICJxIikgewogICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoImV4dGRiZyIpLmNsaWNrKCk7CiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09PSAibSIpIHsKICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJkZXZkYmciKS5jbGljaygpOwogICAgICAgICAgICB9IGVsc2UgaWYgKFsiMSIsICIyIiwgIjMiLCAiNCIsICI1IiwgIjYiLCAiNyIsICI4IiwgIjkiXS5pbmNsdWRlcyhldmVudC5rZXkpKSB7CiAgICAgICAgICAgICAgICBkb2N1bWVudAogICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKGBwIC5oYXJkY29kZWQ6bnRoLWNoaWxkKCR7cGFyc2VJbnQoZXZlbnQua2V5KX0pYCkKICAgICAgICAgICAgICAgICAgICAuY2xpY2soKTsKICAgICAgICAgICAgfQogICAgICAgIH0pOwogICAgPC9zY3JpcHQ+CjwvYm9keT4KPC9odG1sPgo=")

fs.writeFile("./codeExampleOut/dataout2.js", data, (err) => {
    if (err) {
        console.log(err)
    }
})