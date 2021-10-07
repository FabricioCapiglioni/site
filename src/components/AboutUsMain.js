import { Link } from "react-router-dom";
import legend from "../assets/images/rino_leyenda.svg";

const AboutUsMain = ({ isHome }) => {
	isHome = isHome === "false" ? false : true;

	return (
		<div className="aboutUsMain">
			<img
				className="aboutUsMain__image"
				src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQVFBgVFRUYGRgaGBobGhsbGxsaGhoaGxoaGhsaGxsbIS0kGx0qIRgYJTclKi4xNDQ0GiM6PzozPi0zNDEBCwsLEA8QHxISHTEqIyozMzMzMTMzMzMzMzMzMzMzNTMzMzM0NTMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM//AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAIDBAYBB//EAEsQAAIBAgMDCQUDCgMFCQEAAAECEQADBBIhBTFBBhMiUWFxgZGhMlKxwdFCcoIHFCMzYpKiwuHwFUOyRFOT0vEkNEWDhKPD0+IW/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwQFBv/EACwRAAICAgECBAYCAwEAAAAAAAABAhEDIRIEMUFRcYETIkJhkaEUMrHh8FL/2gAMAwEAAhEDEQA/APVaVdpUgOUq7SoA5SrsUqAOUq7SpAcpV2lTA5SrpNCsbtVkRmW3MdZ0PlUSko9xpN9gpFD7u1rasyAOzDgEY+sRQLAYC41w3bt64kmRbW4csdwNFhvhAB1kyWPjNLm32BLzJr9tm/SKArFYAfhUWGDW82rO53kyEHdpSDupz5HfSIB08pqwmIYAtchR9kDU1PfYzJcrMBcxFxJchRBKj2TqOFHb10i2iBdyjeCZju3Vn+WG37tq4iWAoLgHNkLvGkgA6DyoT+ULFhrdg5umVkz0WmDM04iZpbeIuZv1UTxykj01p4v3GgFYE+6w+NeSLibg3XH8GPyNHOTOOuteg3HgKSJZiJA6joaoij0WBu6+PD1p+K2TcuWoVUOu5iR8KwT8qMarMBcRoJiUXQT2Vu9i8oG/N0e6oLEfZhR6mihmd23yediklUcGA6wrDvIiazWI2a7X7Vm4he4G6WntjrLHeK9fwe1LV1ZzIp4qWWax+2cWLePtuseweE9XVQ0gWl3OYfkSouG5cRG91EBVV7IG89tcwOCuIXh7tsToGECOzODI7qP7K5Ri60G3lA45p9IEVd2ptK2LZZenHAGmku4m0/Ez9+7cS3Oclp9ohT6RFdsYq4QOlPXKR9Ku4bF51DhTrw0mo720EVgrI0ndopHoapeYvcZiLrgiMkftKSfMMKat1joQneoI89adftoW1Lg/szHpVfE4QOrItxwzfaIkr3ZqeiHdkptqOiQJJnQMP5qdhrAa6oBIkydT8z20Cfk3it641xHWinx0apNk7KxlvFIWxBuKDqMkT45tKrQkvQ9ENV8e+W2xiYG6rUVXxrQh0nsqH2N0DLLkqDBEjqX60qmt2jA6C+f/AOaVY+xZG22G6kPiR9aJ4O8XXMQB3GawC4+4Nbli2QOMlfKQaIYDlRzehtgjgFuCB4FaiGeD8R8H5G2rjGKzI5ZW5g2n8GQ/EiujlKXMJbYfey/ImtHlj5i4PyNAMUnvD1qVHB3GayT4k8SwJPDKfiRRHZu0soIuDuI18xSWaPmLiw7SiqI2vZ94j8LfIVKmPttuM+BHxqlOL7NCplmKiv4hLYLOwUDiTAqHFYwBGKnpRppOvdQb/DjcUNedmJ9rMQEA7BwolJrSGkn3OYnlRZdwlsM4n2gNPCTrVLb952a2qFgrHpDrqztXB2xcshXVVnthhroCBVraSW+cRQkng0nT11rCadNtmkKvSO7I2eyA5pEniSerhU1/FW0uBQMz9pAA86lXCyZJcjTeTHkTXL2z0LZicxGoEDT51qlozZwY180tlCR45qfbu85vkg6boHhUqNm6MCImTr6RUOITMyqrZgPa6X0MUeAGf5QYjC2r6Jczs5gKiKNx4lmMRVvauwMPcyk2kbTc4zR9DUW29kB7y3SACgAVmbKs+etRbYxDIVz3HMjei3I80G7tpr7kso4nk/glBmxbJHAAif4hUGyMBhc5a3hsjxE5mgjiPaj0qfG3MyyGJIjfmPnI1qDDbZto6o65TO9QQpPaANK8740nm4tv27UD7WEByXwhk80QTqYd9/71W2FrDoFg5BoBGY+tW7R0kmQdxFR4rCi50WJEa6RXpKSel3J2Si1bgNkXXUHKKAYu1bbGoHUMMhgETWjCmAJ0HZ/WshtW8y7SRVMdGNwOhqmG6NKmFtpqiqvXGmlQm7h2BXnEjiOcUfOp3tkAjTWgj7CuSSDbM9eYH0p+hPqgzZW2qgKwC8DmB9TTL2DRyHzEkboI+lUcTs12tC3CZhv1OX1FDcNyca3cV+bUEGSQ3ypi9jTspOWF3Hfp9ar7Uu3FGe3bzsNyyFnxJrDcq8blxBALjrjT4GrOGx1s4dndiUUjNmk+hq60Ry21Qb/x3Fjfgn8GU69W+n7K2/cbEoj4a4gO9mHRB6iZ31m7e1MDB1UQPdI6+yrmw9oWTeAs3EL/AGQ2aD6UpOlZUFckj1PMOuqO2LkW2gidNN539VBsZi1tDPfuAA8CdAfOIrMbU5Wq4a3hQCwPtyuXeNwnWuVZnLSR2PEoq2zZ2QcokNuHBhw7qVZrB8tEyLziMHgBgCIkaadKlVcWRyQJUK5WTnjUbxr2gHXyqpjsbbVs0EsNNXUAd6rE99MGdMwCgcfswPmKpYuy97VJdl4ASY7D1V4WCPzXJ69Syq94sSS57sxgeE1Ph77oZS4wPYaHZCDBEHjT8gFeyqond9zV8n8bce5+kuO6gboB+ArUNi7cwQQOsqR8Kx/JsFQzhSewAmaKX8Yx3q6/hNZJxbaVBsvXtqWi4VZ0O+HHqwiruG2jbBCBpZjoBrWTx+JgSrOT1FT9BQc4q5ziN0gcwJ1Kjxk1cYpO6QvA9bRCpBMd0T67q5igblxUZTkI0zRHh1UOwdu41zn+dLSoFtY6K7+tt/hRfLea4ocSpHA6A61qm2KkU8faHO2kXpRv1Ayjr137+FWMaEF5AWaY3QMviZ08qGXLHN41SWzlt4C5su/efs76v4+x+nRyyBVXUT0vAVMuxUS9cxUuESSBvIBjz3VFiMHqS1wKp3wYLdlD7G1nuXygACDQCJJ7SRurqYK4LxuHUNoMzaDw8quyAs1m2xVRmMd8fSm4iybeltVXiTlk+Gv1qhtTHKgMNuGpFUNk7cRvts7jgCsR26+utcMetjLI4L8+BfGgLynwCviEuXLhOWDGSTI8gPKrO1dsBwkW3O4dIBT5dXfFRbb2/dXGpbQIqsQWYWw7weGY/IUQ5Q3rbQy8N5nXTx0rfNPjHUqIYGxN9PZMqPGfhFCMIHu3gMwCg65pbMO0jSrGLyMDcBJG7eZXv10NdwiFVzAhWH3QI68zb68yKeN8m7fqDaao1eGSx+rWAOIXRfT50zaWzRdQIrFADwkfCKC2MU+WSJJ10YmfEUQfa7qilVWSYIOseRrs6LLy5Okt+5EtHdmbHa1ckvcccJdo8QTQHlDrjxBgwI6RX1GtaW/ic6iSQZHs6H1maxn51O0gzGYj2vDqrXFKTnPk3SHrjo12zXutnzs27QkkgdoJqjiBi06QxOYT7IUE+q0YTHEhiVEDXQzPppUGG20XEi0Y3e0PpXdFaoz5fcTNea2pW4qPxLhdfAiKq2cbiBdFu5cRx+yo+IohitpLbAZkY5uAgkeZplrbFtzlFtwT1hY9DTApYnbjqxUW1YAxOtQYnape3+rQGdxAYHwIqzibdnOc1p54kWVafxZZNR39nWrym2udJ6lFth3ArVE78we6KZ/Q2jAn9Wuu/s3VLsXBJz4PM2xAJBt2wrDsmaYvJrKci4m8CRuzDQdYq3snYD2rouc87gTKtrP7oJpT/qyof2Ww9j+T9vHW1W4rpkMxKy3achPxrF7V5F3MM7OrpkIgAZsxHbO89s1ptvYe7iAnNHEWyram0GBP3i7JA8DQILizcfn7lx1QALzhTTXiE0rBNUdWw5s7kXhzaQssnKJPX60qOWVBVTJ9leB6hSp2TR57ZwlwCDmPWsRI69aksoUlUt5QRxAGvhU+EvQwSdF9qePcZqHH4xM/SnXsIEd41r5iU5Tk9aZWio2y7TsSzMh4nSD/AAipP8Iw66G4GadZaBH4ZmqlmylxioLAfZ3jyk61JisElgEo7FiNQST6Vt8SS+Tk/QLDGKe3bTokgRoQxKnu1zLQJ+UeWUKHsLGSPPU1XXaiFCM4niNVJ8NxpuCwlvFtlD5WG4aajskxV4sPF3JP1Jt+Bcvi4ULyBOqg76EYiTcQll36zPpGlajZZXD3ObxKJcX7L6sV+8m6KOYra1pYFtRljgFQegFdkOpWONt2/sDRHyRuvqCrn3SzSOPspGnDXWtAzYsl0OgYdE6BVH3jr6Vhb+1ntlriOO4FmPcCDFD25bXFBtuG1MksWDCiHVzknURXE9H0tXEUsM7COjxOnEVU2ohXEpcuB8oU6gTJ6pJgV50vKJg4KgGeKiCO/dNXV27fuDpTlB3k8fGifUTrca9ylJG2wG3WuXShVUEwq6Z56zRK9adhJDE68ZjuBOnhWA2Pt+6XjncsGMoQZj3mKPttR4MxpuJYkz3DQVnn6zTg09oIj8dgbimQhYkHpTqOsdnlUWAwNpUL3beaNc0rmG/gIPwqu23hqrtmB0Ky8z+CJ8qhxGJHNwq5RGpYhT+4RPrXCqi04p+42ybGXrD3s6K7sYC7hA6wSZ86pbXJRgNxO7pK/wDFAg9wqviVXmwymTuLMQI7hINBztIAHMQ54bwI7IrWPLLblbZL0EL9xgDzhgHcNxbv6vOocAoBbKWQjqLZSPCqt5SwDdODwnQeGUEeM0/IQqgmNdOloe8DdVyikqWhWEGxBz9Ewe4EdpjeKK4C2ig52LAmRImD2aTWbuYnp5S2UDdu9Cxq0+1QdLjQODRAPef6Vv0nyy9SJ0zWJi7bJ0TImDIMzPUYNYNwo2gc5hZ3zHVxrV7NsSogAoSDqQ3j1TWQuWw+OcSBrx3cK7MSuc77Cv5T0LDX7TDo3AwG/pTA7ams8wFlbqZexkIHnWewSNZRs2Ug9Z+lWbFi3cEW7Kqw3nMWHeJb5Vus8b4x2zNLQbupbaMziOBka/KnZE4PMfd+VUrmAtuirctlwvANlqva2UqXQ9u3kTgCZI8a6BhbpTos/u1Ux73E6SgBuAYqB6mKbcTClgWtIW4khJPfVZ9o4WxL3LY5uYACqwB14TFOydFBdpYxbnOHD23MQIuosjtEmKJ7K23iHYpcsJbUg5X5xSJ6oFDV2ls64DcyPMx0QYHgGip9i4/BG7lwxdmynMG4ee6pm1xZeNO0TcosNiLiW+ZxKo0nOYJHHQC2jA+NZrAYe5bGJLsWcKOnlZfLMBWo5UbYxdoWxhbltC/tZ3tAjuNxgPKaxlvat428QLt0XGIAJDAwfw6eVc0e9UdMn9z1DZeMuczb6RPRHV9aVBsDtdktooVDCjep+tKr0Tsx2KxRM5Q6nsHzFR4cK6nMxzdp18OjVi8jBiBHlXEwV1hoi9/E+QrwVKKj5ANwL3F0zDLuhfa9ai2zeIHQzT3gz3zUOKw72yCSJ6o/rVLGq7wRr2TH0itIQTkpWqApZnPRKjrO4etTJhYGYMM2+BPxircIi9K2obxcnxzGq+IvuRqrKp3bwK6+TfYggxWKdo1/vtqO1tR1GQmVnd/1qI3gev8AvwppuDUCNd8xWsccWqaAJ/nBdlyuE7yPhTdqoCAxuKWG+ABPdFBy3XBply7pGndTWCmqYFy1ilUbzrv6/hFMbFvGRTInQcarYbCtcaAPWKI2HNpoIGbgSZjuIqpKMe22AWwuD/RhnQKx3nPDR1kTp5UT2Pgw+ZVHRG98zN4DhWXv4npZmEseIg+lH+TuMzkoFd2I0ACrJ3cDO+K4s2LI4truxx7lpVIfpEZ5hBlIPiDoKNYbkxfeWuZ4bgAGzeJgKO2RWj2JyRtoVvYkZnA6KM2YL94/aNaDE7TUCBwrpwdGkuU/wNvyMnh+SdsLDgAftPmbyUfzUy9yZwWmZQY7bn/NRbG7SgSTWUx+2JnWvQhgxLtFGMm/Ms4nZODgDnMsbtWHnLQaqNs7CDdeX+H5UBxOPk76H3MaZitPg4X3ijN8vBmgbYNhpC3pnhmEf6TTjyaRoBuKB2kn0C1lrmI7qit3SWgEjiYJGn96eNaLBhbrj+yJfE7qS/BtRh7NlQi3WuQZgaAdkSflQ+3g7Yum6ufOTPtn4BapNiObSTqzTAO7Tex7BoI4nuNCMTjLjrJdjHCYGmuijQVtLpsGJtKNvx2c8Z5p7TSXp3NfiLAaDzmUjrk+eYa+dMZMYDmtXVPcltiO6ATWPtXWG5mHcSPhVkbQupDC42h1npafirBdPiW4qvc1jKcXtp+xvMTjLvNoUuQxGpyqRPbI0qLZuKxhcC5dtunHKFzelDtj8pSSEuga6BuHZM7u8mO7fRXE7XdGy80scCH174K+lTODj6GsJ8teIfyKYi4sneCbf0mqpZMzC5ctqonVgIO/tFDm2tfAJ1gDcHtnTuKUB2hiFxKlHRwZmQ6LJ78selZ2aaNJtGzhxkHO2AGBg7lJ16n186rbOwNtbmb9G8AmVUSd/WSTu3Vi8Xsq2qKsXdSdz2yePZRvkrsW3auBxcc5l1U59AetkUKN/vVlkSq/E2xs0m18e1pA+HwqXBE5TbVWB/ZzIZ8BWBfH3L1vENcTIQQcuQKR2HQfCtjyoxti0ER8Mb7kSvSLLl4yS4+dYhMVbe1fKWktAsBAYk+RrLHTt/8AIuV0eqbFvW+Yt63fZG5iB4a0qGbK2xgVs2w2NwwIUSCxkd/TpVrTJsAHC2yf1qz95amViggXAR95R8BVRcLm6UfwgfCuXUztlgaD3R8a4XixyW0i6LmJtrdXK2UHrlWPnAoYNgsD+tzRuBA+tWxZVLZ0HlVa1hQGDEDyFXHFCKpIKFd2e06kk8NBHkTVd9jXW/zfAiAO6DXThVc5oG/gKnxVhSQvZ2/KqUIrwJ4g+7yeukRmQ9pEH0qk/Jm+OKebfSjr4cKoXrPb9akSxltkyTPafrWipA0ZpuT2IPueZ+lNPJvEe6v731FaO3bIDEs273m+ZqTB4VySZciPeY/E01IOIJTZl7LBQAxGhEfGqR2Pic4/RkgHSCvwzTW92XydusQ1666A7rYLM57wTC+p7K1Gz+T9pCCLbufeuXCf4ZC+laQ6Z1dVfmYuaTo85x3IbFW0TM6I7kRbks/DSEBBOu6evXjXpHJXkxawVsM3SukasYJHd29vl2222QvO/nA0uhcq9Nii6R0VMhPAdfWarlMXrzjo4J0gwQOr2VBraOFLS/IfE1sm2jj9+prM4vaMcdf77KI4nAXW3tHitCcTyfuH7c/u/WtI9PK/9kPLH/kBNqbTOomgV3E6a0evcmcRJMqfAf8AOapXuTl4bx/fnW6wS8F+zJ5Y+L/QCe7ULGiJ2LfMkJK+8TAPp67qpHCx7ToD1L0/hpVLpsj0kL40Fuyk9yiGybMmfHXd2T2bzUSYNZBMtruMAHv3yK5isdlZraADg2/cd4HoPE1vDp3ivJLw/wAmcsiy/JHx7+hZx90O8gdGIXrgbvmT2moltQDppE8eFVLOLXXnLd9uoL0RHbpPXUy4qSOawt+Z0OdyT3wsVKx45Lk5O39jSqdJaIrJ4dWnlp8qsg6RRRthO7m50kDGcuUdEkCRJZeM8ONXLXJ9dJJ7y6AeQBNRHBPyMZ54X3M5hm0I3kSAOJO4d86edazDFygRjmKqonrIUA94MfCol2NbtsCrWw7HTpOxkRuG4cNYq22zLjLlRlDaEFT6HTca1WFKEuXkc8s/KcVHSu2xPjCFK6aj9mquAt5g2g7518hTQ7KzLeRiQQIMEiNd/HSN1WFx1saZGA6gFA8pr57NPN2ivye08aT72vsSPhVdRE5g3VrHZJ1oujKg9qdBINu3HixSfWgSYtASYcT1gU65tC31t5HWvPy4+qk7WvRjjSNFiMbZ0zojwNP0aEDu0+FY7lgiJaBS1kLtuVAojTXojs41dt7Vt5wWkqDJEEzHeKubd27avspW20QBrOndpHCtuj6XJF8p36WNyMxhcDgmRSwOYjXv865R/wDw2yfsD1pV2fAl/wCmSXEX9HrVSwZdgOqr2LdFSFYGhWAvKHYlhWK7G5PjXKpwp+IHRB7PlVfFXw27Xup+IxAgKDrG6rER4BP0f4jSUDndfdrlhjbt9JWGvEEU7DW3a4XFt8uXeFJHnFPzJH4sdNB21JiF6ERxFRgF3BCtA36bqcHLNlSJB11A+NMDuJTonw+VbXklhls2+dca3B0dNAo+Z390UD2Jsw37+Rx0EAZ+ogblB7T6TWr2xiEsqWdegqmIErAG6ODRp2/DfFC9sznKtIZjeU+CstFy6iM0mGDAnr1jXzqjd5cYLhfU+Nee7X2uLi27lk2RnzEqypdKCRALMd/WBpw4EkJ+cvxt4U/+ntfGK7IuPdq/cwd+Dr2PT7vLjC8Linxqje5aWeDjzoHidlYe4lu7zVlEFkG4qplYsbi2+cmIVQC7kA/Z3GsVbvBBlOGsvBPSbOGIk78pA8q2hmgvp/Zm8bf1fo9EucsrfBxVS5yzT3qw4vWydcGn4XvD+ermGwdpz0FKPEZHYlHnT9HcPsvr7LaHQCa2XUwX0/szfTt/UzQ3OWw7ajuctXKkW7IZjpnfM4A/ZQQPEk1UTZ7Sv6ICFZDnW8hYnTMwVCA6zvVspIB03UTbCYhEBCWUG/PcVbaR0eMnN7I1leOlS+qb0o17jjgin3bM3isdibx/SM7D3dFVe5FgDyqwLGQKWygMoYQZMHdoRpNc2jicoIfEK40zJaXQwZjPujXeD4UGvY25euFjxIAA3Abgo7AK7uleWTuSpencWTFFxfmaJckfTU+dDcZgUcQFC6yW3k+NMUi2YbpEb+yoLl+R1DhBkH6Gt3nxXwtWcmPBki+UW68y5g35oAC4TAgAkEDu0mrbbUbixrPpcp73YEUnkUdJFTwcpW9sI38bmIPOMCOoj5047Q03E95+tB+e6qQcnSs+bsr+PGqfgFUv870SoIB4jdWgwu01tbm4bqy9u4EXu9aja+o1doLagb9PkKeXNjxr5vEz/jPI6WkjX3MeLlxGMdLo+SswPfoR4jqqY2gay+yLijEWhccC3mLFukRGR4PQ1O/hW3OL2eB+tU91q9PmXFeJ16jKalHs0el0sHCHFsoNbWmGysVcbaWzh9pj3W2/mvVGds7P4I7dyoP5zXFxZ02VObXspt0ouvb9av8A+J4P7OFvt+C2fjbakMbbPs7Out3og/8Agp0w0dXbOGjeP3T9KVMif/CT5J/9dcpiDvNc6B+hL9U3LX8l1fhVyxs7EgZRhXy9X5yAPKWrzhNq5dQ5B6wYqX/Hrx0F68ewXH+RrPRZ6Lb2NeU5kwqI3XzzA+a/Sn3dj4l/bs2T965m9TZJ9a86GOxDbhfb/iGkUxTf7PfP/luflTA9BGxbo3rgwO3OfkB6Ujs0j/Mwidyn5FfjXnT4bEjfh7g77bD5VGlu8dMoX77Kn+o0CPSDhFG/G4VT15AT/Hdrhe0Pa2jaPclv5MaxFjYWJf2Wsf8AFX5TV63yNxrfbsjudj8FqgPQ9k4u3bSQ73Vckh1tnJA0yjKNYM9e+gvLjbFz83ZLehYbyv2eIhhpVa1ZuWcPbt5pa3nBKyB7bbqzO2cVeusElnPAASx8hJrswzhBpyVnNljJp8WYO7mUncBMwdACY3dmmnlwrgxJPE+BHy0rQX8JdHtW3HfbI+Iqjdtge0B4irnHDJ2m17BFzraX5KzLaOskGBvmZjX51QF5td8eNEWsofsr5f1qM4dPdHlUcMXhL9FJyXh/grG8ev0+tR9Ju7tA+AFXBYQfZWpVXqy+MmtMccMXcpX7ClKf0o5b2tiEUKl11AEDK2Qx1Flhj4mqlzEOxzNqx3sZZj3k6miAJ/Y/cB+NOzwDKofwAHwI3V24+swY/wCuvYjjkfdAtbbMdTV21CRpJq9isItvJBnnLNu5uiM4MjtgqdaF4u7oSO4d50+ddGfqW8XNPuY05T4sp4lmuMYPRBO/ieJ7dar2GKtlO46H60TwdgQgGpZ0WP2Tm1/hNV9sYfKQQCAZieqSPl618/y2d9aHc5Gh4Uxrk0zEoytJU9Ikjt/v5021ZuMYVGPgZr1Vni0tnP8AD2SBqkttFWrGwcY3s2LgHWVIHmdKIJyQxiibot2167lxV+po/kRT2xPG2gU7zA4TJ7gJPwqsuHNzM5mTr2Dq8BRTaGzFtITz6OxhQqBiNSJ6ZAG4GrGGtC2uZzChDu1lTkYz26MvhXD1WZTejXHDiqJPyf4Jb2JS3cUMiFywO6MjQP3ta9Wt7Awi7rFsfhB+NedfkzDfnlwAdHLLd0EDxkj1r1YxXNKV0aJUV02fZXdbQdyr9KmRFG7TuAHyp2bsNIGpAX73p9K5Brs0s9AxQezyrlOz0qALCYC0vs20Hcij5VMttRuA8qdmpZhQAopRXOc/uK5nNADorjWwd4B76aWNck0CIrmzbLe1bQ/hH0qs2wsPwthfull+Bq8a5QBk9u7EvEj83V2ADLI6TDpZxHTVtc5119msnyk2w+FX81ss5uR/2m+kyWP+RbuAaKv2iNSRHXXqeItBgRqDBgzEHwrxDG7TdGZDbRSGIYamCCQfaJ6jV8tCoEWdrYlT+vvrv/zLg+BqyOUWLXdir+8b7jt/qY0y1tDNmDZEjcSGg9kg6VSOPB3p/frRY6Cf/wDTYvjfLfeW23+pDTG2/iCSCbTR14fDmf8A25o0nIfGsiuLSQyhgC6BgCJggqIOu6arXOROOH+yt4PZPwempfcVIqWNvAH9LhsO6/aCpzTR+yyEAHwo2eTdvEW+fwN0sv2rbhc6H3CeB75nrO+gd7kpjV34O74Lm/0sadsy3jsI4uW7F9TuYG1cysPdII1HqOBFWmvEUk/AG3bxRir51ZTBByqQR2TT7PT1DQApbpOo3GIHWeyi23dpW8Q4uXMPftuBDZIE95ZdYoZfWykZ7eKEiRmdUkdYlDI7aTir0wTdbQV26/8A3Ug/7Fa8encoNiY6I6zJ8B/Wu4zH86whciqioqyTCIIUSd57e2qXOzc7tPrTlOXHjboEld1sL4LF5mjm+khCyo4A9Fj3Sw/GKp7VS4V5x1KhmhVOhAEQIouGV0c5FXQ9ASA41UM5BBMkaAdR66k2XgExz27Rum2uV3JbplcuVQvSImSx1mstFFfZXKBbSwbFu4ZlTcEhdADA7YFEW5eYkCLYtWx+xbA+M0Zt/k5wsa4tyezmx6a1bsfk8wSkFrl54M5SyBT2HKkx3GnaCjD4nlNiX6TXnnsOX/TFUxtNmMtLHrJJJ8TXstnYuDT2MLZHbzaT5kTWC/KNyds20/ObSsC1yLgnogMDBAA6IkAeIoUkBlMVjc2VdNWBPhROxg1RcrMrqze8yqTvyAjjm69NSKytswQe2tGHLWmYiFVgQeAyBW9WJ86HYHpnIbB20svdCgPcuXMx7EcoqjsEHzNaU3KEbAwbW8NatuekEBf77dJ/4mNEBbFQMkN4Vw3a6loncvkKfzUbyo8dfIUARZz1UobrFSwg4se4R8fpTGYcBHjNADcnaaVLNSpWOgrNLMKhNcg0xEpeuZ+yo4pRQA8v2U3PXJFKaAFnNIsa4WppagBxavOPyh7EtqxvrcRGeSbbMFLsBqyTvO6R9a9CLUG2xsNMR7Vy6vYtw5P3DpRYHgxJBmDWh5I2cGbyvirqqiEEIVdmuMNQDlUgJO/XXdWwxPID3LinsZSvqJoXf5DXhuVW7mH80U7QG9flhgAJOJTu1zfuxPpVJ+X+BG64zd1t/wCYCsDd5I31/wAp/CD8DVG7sG4u+2471I+VFAehXPyjYb7Nu6e8Io/1GqV78pI+xY/euR6BawZ2caa2AaigNdifyjYk+xbtr35mPqQPSs/tXlLfxEc6UeN02rZjuLKSPOhpwDUxsA3XVCKWOaSDAHDQADyFVrbQRRFtnOaZ/hNzspgXsK5Ids4BIQa6dFTJjrPZvqhfUMdPZGgqdNnXQInSrNvAMOFIAZ+b10Ycjd6UaXBHqqZMEeqgAKj3l9m447nYfA0+9iMSylHu3GQ71Z2KmDIkEwdQDRwYGnrgKAMmMC/VV7CJcQqdOiwYaBtVMiQRBE8DWjXZ/ZU1vZp6qLAlscrsdxZG77a/yxRLD8r8VxS2fwsP5qqWtkP7p8qspsh/dNLQBG3yuuH2rQPc5HxBq5a5TA77ZHcwPyFCU2Y/umrKbNb3TSpDCqbftnerjwB+dTLtW0ftEd4Pyocmy26qspsk8aWg2Xfz+3749a5UX+Fr10qNDNDmNcLVGXpjXDQBLXJqLnK5v/v6UCJC/bTc4phQ1zmz10APz1wvXOb765zY/uT8aAGl6RB6j41IDG4f34UpPCgCLmzXSnbTjm66QWgBgtCugRUy4djwPw+NdNgDe6j1PlQBWdAd6g94+tVLmzLLe1aQ/gHxokTbHvN6Cu897qKO/pUABG5O4Zv8keGb5GmtyRsH/Ky9udh86OPfY/aPhpUTHr+tFgAW5HYX33H3Tm9SKhbkhZ4O/jl+laOaU0WBmTyRt/7xvIVw8kl/3h/d/rWlpCiwozQ5LD/efw/1qReTK8bn8P8AWtATXC4pWwoDJydtjexPpU6bFtDhRHMa5RYysuz7Q+yKlSyg3KB4VKop8UwGAV3LTqU0gOBa7TS1dtozmFBPd9eFAHc1NLURtbLP2zHYNT5/9au2cKibhr17zRQAXmrh+w3ka5WimlT4iAoUnj8q7zHj40qVAHcoFMpUqAHZqYxNdpUAN1rhpUqAEDT5XiT4CPXWlSoAeLq8EnvNNa83AhexR9aVKgBh7ST3mozApUqAFNI99cpUAIEdtcpUqAOzTS3XXaVA2NL03PSpUgYt9KKVKmIVOpUqAOTTS9KlSGKKs4fBM50jxNKlQhBCzs5R7XSPkPKroAAgaDqFKlVAItXC1KlQAzPSpUqAP//Z"
				alt="Nosotros"
			/>
			<div className="aboutUsMain__textContainer">
				<img
					className="aboutUsMain__legend"
					src={legend}
					alt="Rino Repuestos"
				/>
				<div>
					<strong className="aboutUsMain__title">RINO REPUESTOS SRL</strong>
					<p
						className={`aboutUsMain__paragraph aboutUsMain__paragraph--first ${
							isHome ? "aboutUsMain__paragraph--home" : ""
						}`}
					>
						es una empresa joven dedicada a la importación, exportación,
						fabricación y distribución de partes y repuestos de motor de todos
						los modelos y de todas las marcas, tanto de linea liviana, como
						pesada y agraria.
					</p>
				</div>
				{isHome ? (
					<Link to="/nosotros" className="aboutUsMain__link">
						Ver mas...
					</Link>
				) : (
					<>
						<p className="aboutUsMain__paragraph">
							Contamos con amplios conocimientos técnicos, para poder brindarles
							una respuesta concreta a cualquier inquietud, y de ese modo
							aportar una solución integra.
						</p>
						<p className="aboutUsMain__paragraph">
							Permanentemente estamos incorporando nuevos productos a nuestro
							amplio stock de repuestos, somos importadores directos con
							proveedores distribuidos en Japón, Inglaterra, Estados Unidos,
							Brasil, Turquía, India, China y Korea.
						</p>
					</>
				)}
			</div>
		</div>
	);
};

export default AboutUsMain;
